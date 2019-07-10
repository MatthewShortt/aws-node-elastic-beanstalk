const ddb = require('../../config/aws.config').ddb;
const aws = require('../../config/aws.config').AWS;
const sns = require('../../config/aws.config').sns;
const sqs = require('../../config/aws.config').sqs;

exports.listTables = async () => {
    return await ddb.listTables({}).promise();
};

exports.describeTable = async (req) => {
    return await ddb.describeTable({'TableName': req.body.tableName}).promise();
};

exports.createTable = async () => {
    const params = {
        TableName : "Cars",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH"},
            //Partition key
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "N" },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    return await ddb.createTable(params).promise();
};

exports.homepage = async () => {
    return await 'Welcome to the RESTful API using node.js, express and DynamoDB.';
};

exports.test = async() => {
    return await ddb.config;
};