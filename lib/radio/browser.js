'use strict';

// Public
exports.printMediaHistory = function(li, entry) {
  li
    .append($('<p>').text('Icecast Radio:'))
    .append($('<p>').text(this.getCaption({data: entry.data.media})))
  ;
};
