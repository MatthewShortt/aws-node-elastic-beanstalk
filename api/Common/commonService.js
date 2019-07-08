const ddb = require('../../aws.config').ddb;

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



