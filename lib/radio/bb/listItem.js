'use strict';

// Public
exports.tapDiscard = null;

exports.displayData = function() {
  this.$()
    .empty()
    .append($('<p>').text(this.entry.data.name))
    .append($('<p>').text(this.entry.data.nowPlaying))
    .attr('url', this.entry.id)
  ;
};

