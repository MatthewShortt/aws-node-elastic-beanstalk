'use strict';
module.exports = function (app) {
    let controller = require('./commonController');

    app.route('/')
        .get(controller.homepage);

    app.route('/listTables')
        .get(controller.listTables);

    app.route('/describeTable')
        .get(controller.describeTable);

    app.route('/createTable')
        .get(controller.createTable);

    app.route('/test')
        .get(controller.test);
};