'use strict';

var Ose = require('ose');
var M = Ose.package(module);
exports = M.init();

/** Docs {{{1
 * @caption Open Smart Environment Icecast package
 *
 * @readme
 * This package makes it possible to search for Icecast streams in the
 * Icecast directory (http://dir.xiph.org)
 *
 * It defines the icecast stream [entry kind] and registers it as a
 * source to [OSE Media player].
 *
 * See [bundle.media] example application
 *
 * @module icecast
 * @main icecast
 */

/**
 * @caption OSE Icecast core
 *
 * @readme
 * Core singleton of ose-icecast npm package. Registers [entry kinds]
 * defined by this package to the `"icecast"` [scope].
 *
 * @class icecast.lib
 * @type singleton
 */

// Public {{{1
exports.browserConfig = true;

M.content();

M.scope = 'icecast';
M.kind('./radio', 'radio');

var Sources = require('ose-media/lib/sources');
Sources.add('icecast', 'icecast', 'radio');
