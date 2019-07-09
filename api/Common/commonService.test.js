const {stub, assert} = require('sinon');
const _ = require('lodash');
const ddb = require('../../config/aws.config').ddb;
const fixture = require('./commonService');

describe('Common Service', () => {

    describe('listTables', () => {
        let mockDDBListTables, mockDDBListTablesResult;

        before(() => {
            mockDDBListTables = stub(ddb, 'listTables');
        });
        after(() => {
            mockDDBListTables.restore();
        });

        it('should return a list of tables', async () => {
            const expectedResult = {"TableNames": []};
            mockDDBListTablesResult = {promise: stub().returns(expectedResult)};
            mockDDBListTables.returns(mockDDBListTablesResult);

            const actualResponse = await fixture.listTables();

            assert.calledWith(mockDDBListTables, {});
            assert.match(actualResponse, expectedResult);
        });
    });

    describe('describeTable', () => {
        let mockDDBDescribeTable, mockDDBDescribeTableResult;

        before(() => {
            mockDDBDescribeTable = stub(ddb, 'describeTable');
        });
        after(() => {
            mockDDBDescribeTable.restore();
        });

        it('should return a description of a table given a particular table name', async () => {
            let req = {};
            const tableName = "My really cool table";
            _.set(req, "body.tableName", tableName);
            const expectedResult = {"Table": {"TableName": tableName}};

            mockDDBDescribeTableResult = {promise: stub().returns(expectedResult)};
            mockDDBDescribeTable.returns(mockDDBDescribeTableResult);

            const actualResponse = await fixture.describeTable(req);

            assert.calledWith(mockDDBDescribeTable, {'TableName': tableName});
            assert.match(actualResponse, expectedResult);
        });
    });

    describe('createTable', () => {
        let mockDDBCreateTable, mockDDBCreateTableResult;
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

        before(() => {
            mockDDBCreateTable = stub(ddb, 'createTable');
        });
        after(() => {
            mockDDBCreateTable.restore();
        });

        it('should return the created table', async () => {
            const expectedResult = {"TableDescription": {}};
            mockDDBCreateTableResult = {promise: stub().returns(expectedResult)};
            mockDDBCreateTable.returns(mockDDBCreateTableResult);

            const actualResponse = await fixture.createTable();

            assert.calledWith(mockDDBCreateTable, params);
            assert.match(actualResponse, expectedResult);
        });
    });

    describe('homepage', () => {

        it('should return the welcome message', async () => {
            const expectedResult = 'Welcome to the RESTful API using node.js, express and DynamoDB.';

            const actualResponse = await fixture.homepage();

            assert.match(actualResponse, expectedResult);
        });
    });

});