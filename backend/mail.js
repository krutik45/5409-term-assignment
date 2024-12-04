const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        const { email } = JSON.parse(event.body); 

        const { SNS_TOPIC_ARN } = process.env;

        const params = {
            Message: 'Thank you for reaching out. We have received it and we will get back to you soon.', 
            Subject: 'Message Received', 
            TopicArn: SNS_TOPIC_ARN, 
            MessageAttributes: {
                'email': {
                    DataType: 'String',
                    StringValue: email
                }
            }
        };

        await sns.publish(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
              },
            body: JSON.stringify({
                message: 'Email sent successfully'
            })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
              },
            body: JSON.stringify({
                message: 'Error sending email'
            })
        };
    }
};
