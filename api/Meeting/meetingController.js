const meetingService = require('./meetingService');

exports.test = async (req, res) => {
    try {
        return res.json(await meetingService.dbTest());
    }
    catch(err) {
        return res.status(500).send(err);
    }
};