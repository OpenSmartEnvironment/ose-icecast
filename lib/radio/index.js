'use strict';

var Ose = require('ose');
var M = Ose.singleton(module, 'ose/lib/kind');
exports = M.append('runtime').exports;

/** Docs {{{1
 * @module icecast
 */

/**
 * @caption Icecast stream kind
 *
 * @readme
 * [Entry kind] describing Icecast streams.
 *
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

exports.playItem = function(player, item) {
/**
 * Send media item to to playback
 *
 * @param player {Object} Media player entry
 * @param item {Object} Media item entry
 */

  player.postTo(
    player.playback,
    'playUri',
    item.data.media.url
  );
};

