const AWS = require("aws-sdk");
const kms = new AWS.KMS();
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "Users";

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    let eventData = event;

    if (event.body && typeof event.body === "string") {
      eventData = JSON.parse(event.body);
    }
    console.log(eventData);

    const { email, password } = eventData;

    const encryptedPassword = await encryptPassword(
      password,
      process.env.KMS_KEY_ARN
    );

    await saveUser(email, encryptedPassword);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      body: JSON.stringify({ message: "User registered successfully" }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify({ error: error.message || "An error occurred" }),
    };
  }
};

async function encryptPassword(password, kmskeyarn) {
  const params = {
    KeyId: kmskeyarn,
    Plaintext: Buffer.from(password),
  };

  const encryptedData = await kms.encrypt(params).promise();
  return encryptedData.CiphertextBlob.toString("base64");
}

async function saveUser(email, encryptedPassword) {
  const params = {
    TableName: TABLE_NAME,
    Item: { Email: email, password: encryptedPassword },
  };

  await dynamodb.put(params).promise();
}
