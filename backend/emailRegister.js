const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

    try {
        const eventData = JSON.parse(event.body);
        const { email } = eventData; 
        const topicArn = process.env.SNS_TOPIC_ARN;

        if (!topicArn) {
            throw new Error('SNS_TOPIC_ARN environment variable is not set');
        }

        const subscribeParams = {
            Protocol: 'email',
            TopicArn: topicArn,
            Endpoint: email
        };
        await sns.subscribe(subscribeParams).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
            },
            body: JSON.stringify({
                message: 'Email subscription successful'
            })
        };
    } catch (error) {
        console.error('Error subscribing to SNS topic:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
            },
            body: JSON.stringify({
                message: 'Error subscribing to SNS topic'
            })
        };
    }
};
