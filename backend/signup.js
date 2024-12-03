const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("event=>", event);
  console.log(
    "event.name",
    "event.email",
    "event.passsword",
    event.name,
    event.email,
    event.password
  );
  if (!event.name || !event.email || !event.password) {
    return {
      statusCode: 400,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "All fields are required." }),
    };
  }

  try {
    const params = {
      TableName: "Users",
      Key: {
        email: event.email,
      },
    };

    const existingUser = await dynamoDB.get(params).promise();

    if (existingUser.Item) {
      return {
        statusCode: 400,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        body: JSON.stringify({ message: "User already exists." }),
      };
    }

    const putParams = {
      TableName: "Users",
      Item: event,
    };

    await dynamoDB.put(putParams).promise();

    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({
        message: "User registered successfully.",
        user: { email: event.email, name: event.name },
      }),
    };
  } catch (error) {
    console.log("Error saving user:", error);
    return {
      statusCode: 500,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      body: JSON.stringify({ message: "Error creating user." }),
    };
  }
};
