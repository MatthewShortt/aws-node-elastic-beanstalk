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
};