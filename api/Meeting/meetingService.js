var AWS = require('aws-sdk');
AWS.config.region = process.env.REGION;
var ddb = new AWS.DynamoDB();
var ddbTable = process.env.STARTUP_SIGNUP_TABLE;

exports.dbTest = async () => {

    return await ddb.describeTable({
        'TableName': ddbTable
    }, function(err, data) {
        if (err) {
            var returnStatus = 500;

            if (err.code === 'ConditionalCheckFailedException') {
                returnStatus = 409;
            }

            return err;
        } else {
            return data;
        }
    });

};