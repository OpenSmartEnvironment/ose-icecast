'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/http/content')
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
exports.addModule('lib/index');
exports.addModule('lib/remote');
exports.addModule('lib/stream');
