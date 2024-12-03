const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("Received event:", event);

  if (
    !event.customerName ||
    !event.email ||
    !event.checkIn ||
    !event.checkOut ||
    !event.hotelName
  ) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      body: JSON.stringify({ message: "All fields are required." }),
    };
  }

  const bookingId = `BOOK-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;

  const bookingData = {
    bookingId,
    customerName: event.customerName,
    email: event.email,
    checkIn: event.checkIn,
    checkOut: event.checkOut,
    hotelName: event.hotelName,
    createdAt: new Date().toISOString(),
  };

  try {
    const params = {
      TableName: "Bookings",
      Item: bookingData,
    };

    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      body: JSON.stringify({
        message: "Booking added successfully.",
        bookingId: bookingData.bookingId,
        customerName: bookingData.customerName,
        hotelName: bookingData.hotelName,
      }),
    };
  } catch (error) {
    console.error("Error adding booking:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      body: JSON.stringify({ message: "Error adding booking." }),
    };
  }
};
