'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/kind')
;

exports = O.init('icecast', 'stream');

/** Docs {{{1
 * @module icecast
 */

/**
 * @caption Icecast stream kind
 *
 * @readme
 * [Entry kind] describing Icecast streams.
 *
 * @kind stream
 * @schema icecast
 * @class icecast.lib.stream
 * @extend ose.lib.kind
 * @type singleton
 */

// Public {{{1
exports.title = 'Icecast stream';

exports.layout('list', {  // {{{2
  displayLayout: function() {  // {{{3
    if (! (this.demand.filter && this.demand.filter.root)) {
      return;
    }

    var parentDir = this.demand.filter.root;

    if (parentDir === '/') return;

    parentDir = parentDir.split('/');
    parentDir.pop();
    parentDir = parentDir.join('/');

    var that = this;

    this.li({'focusable': undefined})
      .on('tap', function(ev) {
        that.update({filter: {root: parentDir}});
        return false;
      })
      .h3('..')
    ;
  },

  tapItem: function(entry, ev) {  // {{{3
    if (entry.dval && entry.dval.type === 'dir') {
      this.update({filter: {root: entry.id}});
      return false;
    }

    require('ose-html5/lib/view/list').tapItem.apply(this, arguments);
    return false;
  },

  // }}}3
});

exports.playItem = function(player, item, cb) {  // {{{2
  player.playback.post('playUri', item.dval.media.url, cb);
};

exports.getMediaKeys = function(entry) {  // {{{2
  return {};
};

exports.printMediaHistory = function(li, entry) {  // {{{2
  li.section()
    .h3(entry.dval.media.name)
    .p(exports.title)
  ;

  return li;
};

