const {stub, assert} = require('sinon');
const _ = require('lodash');
const CommonService = require('./commonService');
const ServiceComposer = require('../serviceComposer');
const fixture = require('./commonController');

describe('Common Controller', () => {
    let req = {}, res = {};
    let mockServiceComposer;
    const expectedResponse = {};

    before(() => {
        mockServiceComposer = stub(ServiceComposer, 'execute');
    });

    after(() => {
        mockServiceComposer.restore();
    });

    describe('listTables', () => {
        let mockListTables;

        before(() => {
            mockListTables = stub(CommonService, 'listTables');
        });
        after(() => {
            mockListTables.restore();
        });

        it('should call service composer with the update list tables service, request, and response', async () => {
            mockServiceComposer.returns(expectedResponse);

            const actualResponse = await fixture.listTables(req, res);

            assert.calledWith(mockServiceComposer, mockListTables, req, res);
            assert.match(actualResponse, expectedResponse);
        });
    });

    describe('describeTable', () => {
        let mockDescribeTable;

        before(() => {
            mockDescribeTable = stub(CommonService, 'describeTable');
            _.set(req, 'body.tableName', 'Table to find');
        });
        after(() => {
            mockDescribeTable.restore();
            req = {};
        });

        it('should call service composer with the describe table service, request, and response', async () => {
            mockServiceComposer.returns(expectedResponse);

            const actualResponse = await fixture.describeTable(req, res);

            assert.calledWith(mockServiceComposer, mockDescribeTable, req, res);
            assert.match(actualResponse, expectedResponse);
        });
    });

    describe('createTable', () => {
        let mockCreateTable;

        before(() => {
            mockCreateTable = stub(CommonService, 'createTable');
        });
        after(() => {
            mockCreateTable.restore();
        });

        it('should call service composer with the create table service, request, and response', async () => {
            mockServiceComposer.returns(expectedResponse);

            const actualResponse = await fixture.createTable(req, res);

            assert.calledWith(mockServiceComposer, mockCreateTable, req, res);
            assert.match(actualResponse, expectedResponse);
        });
    });

    describe('homepage', () => {
        let mockHomepage;

        before(() => {
            mockHomepage = stub(CommonService, 'homepage');
        });
        after(() => {
            mockHomepage.restore();
        });

        it('should call service composer with the homepage service, request, and response', async () => {
            mockServiceComposer.returns(expectedResponse);

            const actualResponse = await fixture.homepage(req, res);

            assert.calledWith(mockServiceComposer, mockHomepage, req, res);
            assert.match(actualResponse, expectedResponse);
        });
    });
});