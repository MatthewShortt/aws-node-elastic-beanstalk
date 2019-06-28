const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();
const ddbTable =  process.env.STARTUP_SIGNUP_TABLE;

exports.dbTest = async () => {
    const params = {
        ExclusiveStartTableName: ddbTable,
        Limit: 10
    };
    await ddb.listTables(params, function(err, data) {
        if (err) return err; // an error occurred
        else     return data;
    });

    // return await {message: 'This test endpoint is within the api folder, within the controller and now the service!'};
};