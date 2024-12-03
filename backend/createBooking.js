const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  console.log("Received event:", event);

  if (
    !event.customerName ||
    !event.email ||
    !event.checkInDate ||
    !event.checkOutDate ||
    !event.hotelName
  ) {
    return {
      statusCode: 400,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "All fields are required." }),
    };
  }

  const bookingId = uuidv4();

  const bookingData = {
    bookingId,
    customerName: event.customerName,
    email: event.email,
    checkInDate: event.checkInDate,
    checkOutDate: event.checkOutDate,
    hotelName: event.hotelName,
  };

  const params = {
    TableName: "Bookings",
    Item: bookingData,
  };

  try {
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "Booking created successfully.",
        booking: bookingData,
      }),
    };
  } catch (error) {
    console.log("Error creating booking:", error);
    return {
      statusCode: 500,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Error creating booking." }),
    };
  }
};
