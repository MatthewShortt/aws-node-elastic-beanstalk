'use strict';
module.exports = function (app) {
    let controller = require('./meetingController');

    app.route('/anothertest')
        .get(controller.test);
};