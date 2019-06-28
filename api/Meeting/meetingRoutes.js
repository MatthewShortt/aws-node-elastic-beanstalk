'use strict';
module.exports = function (app) {
    app.get('/anothertest', function (req, res){
        res.json({message: 'This test endpoint is within the api folder'});
    });
};