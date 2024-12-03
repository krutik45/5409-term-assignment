const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  console.log("event =>", event);

  if (
    !event.hotelName ||
    !event.address ||
    !event.email ||
    !event.phone ||
    !event.ownerEmail
  ) {
    return {
      statusCode: 400,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "All fields (hotelName, address, email, phone) are required.",
      }),
    };
  }

  try {
    const hotelId = uuidv4();

    const params = {
      TableName: "Hotels",
      Key: {
        hotelName: event.hotelName,
      },
    };

    const existingHotel = await dynamoDB.get(params).promise();

    if (existingHotel.Item) {
      return {
        statusCode: 400,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        body: JSON.stringify({ message: "Hotel already exists." }),
      };
    }

    const putParams = {
      TableName: "Hotels",
      Item: {
        hotelId,
        hotelName: event.hotelName,
        address: event.address,
        email: event.email,
        ownerEmail: event.ownerEmail,
        phone: event.phone,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDB.put(putParams).promise();

    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "Hotel added successfully.",
        hotel: {
          hotelId,
          hotelName: event.hotelName,
          address: event.address,
          email: event.email,
          ownerEmail: event.ownerEmail,
          phone: event.phone,
        },
      }),
    };
  } catch (error) {
    console.log("Error adding hotel:", error);
    return {
      statusCode: 500,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Error adding hotel." }),
    };
  }
};
