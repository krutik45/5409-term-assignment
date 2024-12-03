const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("Received event:", event);

  const { hotelName } = event;

  if (!hotelName) {
    return {
      statusCode: 400,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Hotel name is required." }),
    };
  }

  const params = {
    TableName: "Reviews",
    FilterExpression: "hotelName = :hotelName",
    ExpressionAttributeValues: {
      ":hotelName": hotelName,
    },
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log("Fetched reviews:", data);

    if (data.Items.length === 0) {
      return {
        statusCode: 404,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        body: JSON.stringify({
          message: "No reviews found for the hotel.",
        }),
      };
    }

    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "Reviews fetched successfully.",
        reviews: data.Items,
      }),
    };
  } catch (error) {
    console.log("Error fetching reviews:", error);
    return {
      statusCode: 500,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Error fetching reviews." }),
    };
  }
};
