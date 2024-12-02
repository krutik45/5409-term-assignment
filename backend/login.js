const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("event=>", event);
  console.log("event.email", event.email, "event.password", event.password);

  if (!event.email || !event.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email and password are required." }),
    };
  }

  try {
    const params = {
      TableName: "Users",
      Key: {
        email: event.email,
      },
    };

    const user = await dynamoDB.get(params).promise();

    if (!user.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found." }),
      };
    }

    if (event.password !== user.Item.password) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Invalid password." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Login successful.",
        user: { email: user.Item.email, name: user.Item.name },
      }),
    };
  } catch (error) {
    console.log("Error logging in user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error logging in user." }),
    };
  }
};
