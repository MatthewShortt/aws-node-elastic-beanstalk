exports.execute = async (service, req, res) => {
    try {
        return res.json(await service(req));
    } catch (err) {
        let returnStatus = 500;
        if (err.code === 'ConditionalCheckFailedException') {
            returnStatus = 409;
        }
        return res.status(returnStatus).send(err);
    }
};
