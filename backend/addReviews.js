const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  console.log("Received event:", event);

  if (
    !event.hotelName ||
    !event.customerName ||
    !event.customerEmail ||
    !event.customerPhNo ||
    !event.review ||
    !event.comment
  ) {
    return {
      statusCode: 400,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "All fields are required." }),
    };
  }

  const reviewId = uuidv4();

  const reviewData = {
    reviewId,
    hotelName: event.hotelName,
    customerName: event.customerName,
    review: event.review,
    customerEmail: event.customerEmail,
    customerPhNo: event.customerPhNo,
    comment: event.comment,
    dateAdded: new Date().toISOString(),
  };

  const params = {
    TableName: "Reviews",
    Item: reviewData,
  };

  try {
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "Review added successfully.",
        review: reviewData,
      }),
    };
  } catch (error) {
    console.log("Error adding review:", error);
    return {
      statusCode: 500,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Error adding review." }),
    };
  }
};
