const AWS = require('aws-sdk');

const region = process.env.REGION || 'us-east-2';

AWS.config.region = region;
AWS.config.endpoint = AWS.config.endpoint || 'http://localhost:8000';

let sns = new AWS.SNS();
let ddb = new AWS.DynamoDB();

module.exports = {AWS, ddb, sns};