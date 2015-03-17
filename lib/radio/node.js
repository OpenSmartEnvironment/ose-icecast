'use strict';

var O = require('ose').module(module);

var Jsdom = require('jsdom');

// Public {{{1
exports.getView = function(params, socket) {  // {{{2
  var result = [];

  var shard = params.shard;

  if (params.filter && params.filter.search) {
    Jsdom.env(
      'http://dir.xiph.org/search?search=' + encodeURIComponent(params.filter.search),
      ['http://localhost:' + O.http.port + '/ose-bb/node_modules/jquery/dist/jquery.min.js'],
      onDom
    );
  }

  function onDom(err, window) {  // {{{3
    if (err) {
      O.link.error(socket, err);
      return;
    }

//    require('fs').writeFileSync('/tmp/aaa', window.$('body').html());

    window.$('table.servers-list>tbody>tr').each(eachTr);

    console.log('ICECAST RESPONSE', result);

    O.link.close(socket, {view: result});

    function eachTr() {  // {{{4
      var el = window.$(this);
      var url = el.find('td.tune-in').find('a:first').prop('href');

      var tags = '';
      el.find('ul.inline-tags').find('li').each(function() {
//        console.log('******** tag ********\n', window.$(this).find('li > a').html());
        tags += window.$(this).find('li > a').text();
      });

      shard.get(url, onEntry);

      result.push(url);

      function onEntry(err, entry) {
        if (err) {
          shard.entry(url, 'radio', {
            name: el.find('span.name').text(),
            description: el.find('p.stream-description').text(),
            tags: tags,
            nowplaying: el.find('p.stream-onair').text(),
            url: url,
              // listeners: '6',
              // formats: {}
          });
        }
      }
    }

    // }}}4
  };

  // }}}3
};

// }}}1
