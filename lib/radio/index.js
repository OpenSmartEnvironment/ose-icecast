'use strict';

var O = require('ose').object(module, 'ose/lib/kind');
exports = O.append('runtime').exports;

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
    name: entry.data.name
  };
};

exports.playItem = function(player, item, cb) {
/**
 * Send media item to to playback
 *
 * @param player {Object} Media player entry
 * @param item {Object} Media item entry
 */

  player.playback.post('playUri', item.data.media.url, cb);
};

