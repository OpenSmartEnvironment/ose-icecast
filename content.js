'use strict';

const O = require('ose')(module)
  .singleton(init, 'ose/lib/http/content')
;

exports = O.init();

/** Docs  {{{1
 * @module icecast
 */

/**
 * @caption Icecast content
 *
 * @readme
 * Provides files of [ose-icecast] package to the browser.
 *
 * @class icecast.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
function init() {
  O.inherited(this)();

  this.addModule('lib/radio/browser');
  this.addModule('lib/radio/index');
  this.addModule('lib/radio/bb/listItem');
  this.addModule('lib/index');
};
