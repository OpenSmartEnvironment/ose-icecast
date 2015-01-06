'use strict';

// Public
exports.tapDiscard = null;

exports.displayData = function() {
  this.$()
    .empty()
    .append($('<p>').text(this.entry.data.name))
    .append($('<p>').text(this.entry.data.nowplaying))
    .attr('url', this.entry.id)
  ;
};

