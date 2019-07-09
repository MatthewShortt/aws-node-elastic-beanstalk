const commonService = require('./commonService');
const serviceComposer = require('../serviceComposer');

exports.listTables = async (req, res) => {
    return await serviceComposer.execute(commonService.listTables, req, res);
};

exports.describeTable = async (req, res) => {
    return await serviceComposer.execute(commonService.describeTable, req, res);
};

exports.createTable = async (req, res) => {
    return await serviceComposer.execute(commonService.createTable, req, res);
};

exports.homepage = async (req, res) => {
    return await serviceComposer.execute(commonService.homepage, req, res);
};

exports.test = async (req, res) => {
    return await serviceComposer.execute(commonService.test, req, res);
};