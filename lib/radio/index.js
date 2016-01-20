'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/kind')
  .prepend('runtime')
;

exports = O.init('icecast', radio);

/** Docs {{{1
 * @module icecast
 */

/**
 * @caption Icecast stream kind
 *
 * @readme
 * [Entry kind] describing Icecast streams.
 *
 * @kind radio
 * @class icecast.lib.stream
 * @extend ose.lib.kind
 * @type singleton
 */

// Public {{{1
exports.getMediaKeys = function(entry) {
  return {
    name: entry.dval.name
  };
};

exports.playItem = function(player, item, cb) {
/**
 * Send media item to to playback
 *
 * @param player {Object} Media player entry
 * @param item {Object} Media item entry
 */

  player.playback.post('playUri', item.dval.media.url, cb);
};

