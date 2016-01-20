'use strict';

const O = require('ose')(module)
  .setPackage('ose-icecast')
;

/** Docs {{{1
 * @caption Icecast
 *
 * @readme
 * This package makes it possible to search for Icecast streams in the
 * Icecast directory (http://dir.xiph.org)
 *
 * It defines the icecast stream [entry kind] and registers it as a
 * source to [Media player].
 *
 * See [Media player example].
 *
 * @module icecast
 * @main icecast
 */

/**
 * @caption Icecast core
 *
 * @readme
 * Core singleton of [ose-icecast] npm package. Registers [entry kinds]
 * defined by this package to the `"icecast"` [schema].
 *
 * @class icecast.lib
 * @type singleton
 */

// Public {{{1
exports.browserConfig = true;

exports.config = function(name, val, deps) {  // {{{2
  O.kind('./radio', 'radio', deps);

  O.content('../content');
};
