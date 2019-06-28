const meetingService = require('./meetingService');

exports.test = async (req, res) => {
    return res.json(await meetingService.dbTest());
};