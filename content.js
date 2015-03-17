'use strict';

var O = require('ose').object(module, Init, 'ose/lib/http/content');
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
function Init() {
  O.super.call(this);

  this.addModule('lib/radio/browser');
  this.addModule('lib/radio/index');
  this.addModule('lib/radio/bb/listItem');
  this.addModule('lib/index');
};
