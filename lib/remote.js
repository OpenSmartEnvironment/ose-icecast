'use strict';

const O = require('ose')(module)
  .singleton()
  .prepend('ose/lib/schema/remote')
;

exports = O.init();

var Path = require('path');

exports.find = function(shard, ident, cb) {
  return this.get(shard, ident, cb);
};

exports.findAlias = function(shard, alias, cb) {
  return cb(undefined, alias);
};

