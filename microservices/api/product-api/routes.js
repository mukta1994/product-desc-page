'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/api/product')
       .get(controller.about);
};