const AWS = require('aws-sdk');

const region = process.env.REGION || 'us-east-2';

AWS.config.region = region;

if(process.env.NODE_ENV !== 'prod') {
    require('dotenv').config();
    AWS.config.endpoint = process.env.LOCAL_DDB_ENDPOINT;
}

let sns = new AWS.SNS();
let ddb = new AWS.DynamoDB();

module.exports = {AWS, ddb, sns};