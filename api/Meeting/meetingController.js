exports.test = async (req, res) => {
    return await res.json({message: 'This test endpoint is within the api folder, within the controller!'});
};