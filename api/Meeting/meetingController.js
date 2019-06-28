const meetingService = require('./meetingService');

exports.test = async (req, res) => {
    return await meetingService.dbTest();
};