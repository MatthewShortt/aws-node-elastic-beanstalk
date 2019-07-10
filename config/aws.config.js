const AWS = require('aws-sdk');

const region = process.env.REGION || 'us-east-2';

AWS.config.region = region;

let ddb, sqs, sns;

if (process.env.NODE_ENV === 'prod') {
    ddb = new AWS.DynamoDB();
    sns = new AWS.SNS();
    sqs = new AWS.SQS();
} else {
    require('dotenv').config();
    ddb = new AWS.DynamoDB({endpoint: process.env.LOCAL_DDB_ENDPOINT});
    sns = new AWS.SNS({endpoint: process.env.LOCAL_SNS_ENDPOINT});
    sqs = new AWS.SQS({endpoint: process.env.LOCAL_SQS_ENDPOINT});
}

module.exports = {AWS, ddb, sns, sqs};