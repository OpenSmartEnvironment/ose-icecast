'use strict';

exports = require('ose')
  .singleton(module, 'ose/lib/http/content')
  .exports
;

/** Docs  {{{1
 * @module icecast
 */

/**
 * @caption OSE Icecast content
 *
 * @readme
 * Provides files of OSE Icecast package to the browser.
 *
 * @class icecast.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
exports.addFiles = function() {
  this.addModule('lib/radio/browser');
  this.addModule('lib/radio/index');
  this.addModule('lib/radio/bb/listItem');
  this.addModule('lib/index');
};
