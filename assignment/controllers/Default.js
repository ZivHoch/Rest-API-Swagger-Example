'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.ordersPOST = function ordersPOST (req, res, next, body) {
  Default.ordersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
