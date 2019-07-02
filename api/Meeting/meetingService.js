const AWS = require('aws-sdk');
AWS.config.region = process.env.REGION;
const ddb = new AWS.DynamoDB();
const ddbTable = process.env.STARTUP_SIGNUP_TABLE;

exports.dbTest = async () => {
    const params = {
        'TableName': ddbTable
    };

   return await ddb.describeTable(params, function (err, data) {
        if (err) {
            return {error: err}; // an error occurred
        }
        else {
            return {message: 'This worked'};
        }
    });

    // return await {message: 'This test endpoint is within the api folder, within the controller and now the service!'};
};