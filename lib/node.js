'use strict';

const O = require('ose')(module);

const Entry = O.getClass('ose/lib/entry');
const Fs = require('fs');
const Process = require('child_process');
const Sax = require('sax');

// Public {{{1
exports.init = function(shard, params, cb) {  // {{{2
  var dir = shard.getDataDir();

	O.mkdirp(dir, function(err) {
    if (err) return cb(err);

    Fs.stat(dir + '/yp.xml', function(err, stat) {
      if (err) return reload();

      var timeout = Date.now() - stat.mtime.getTime();
      if (timeout < 0) return reload();
      if (timeout > 24 * 60 * 60 * 1000) return reload();

      setTimeout(reload, timeout);

      return cb();
    });
  });

  function reload() {
    O.log.notice('Downloading "yp.xml" ...');

    Process.exec('wget -O ' + dir + '/yp.xml http://dir.xiph.org/yp.xml', function(err) {
      O.log.notice(' ... "yp.xml" done.');

      if (err) {
        if (cb) {
          cb(err);
          cb = undefined;
          return;
        }
        O.log.error(err);
      } else {
        if (cb) {
          cb();
          cb = undefined;
        } else {
          shard.cleanCache();
        }
      }

      setTimeout(reload, 24 * 60 * 60 * 1000);
    });
  }
};

exports.cleanup = function(shard) {  // {{{2
};

exports.get = function(shard, eid, cb) {  // {{{2
  if (eid in shard.cache) return cb(undefined, shard.cache[eid]);

  return cb(O.error('ENTRY_NOT_FOUND', 'Entry was not found', eid));
};

exports.read = function(shard, eid, cb) {  // {{{2
  cb(O.log.todo());
};

exports.find = function(shard, alias, cb) {  // {{{2
  return exports.get(shard, eid, cb);
};

exports.findAlias = function(shard, alias, cb) {  // {{{2
  return cb(undefined, alias);
};

exports.query = function(shard, name, opts, cb) {  // {{{2
  var data;
  var nodeout;
  var pos = 0;
  var resp = [];
  var stream = Sax.createStream();
  var re = opts.filter && opts.filter.name ?
    new RegExp(opts.filter.name, 'i') :
    undefined
  ;

  stream.on('error', function(err) {
    cb(err);
  });

  stream.on('text', function(val) {
    if (! data) return;
    if (! nodeout) return;

    data[nodeout.name.toLowerCase()] = val;
  });

  stream.on('opentag', function(node) {
    pos++;

    switch (pos) {
    case 2:
      if (node.name !== 'ENTRY') return;

      data = {};
      return;
    case 3:
      if (! data) return;

      nodeout = node;
      return;
    }
  });

  stream.on('closetag', function(node) {
    pos--;

    switch (pos) {
    case 1:
      if (! (data && data.listen_url)) return;
      if (re && ! re.test(data.server_name || data.listen_url || '')) {
        return;
      }

      if (resp.indexOf(data.listen_url) >= 0) return;
      resp.push(data.listen_url);
      if (data.listen_url in shard.cache) return;
      var entry = new Entry(shard, data.listen_url);
      entry.setupKind('stream', 1, {
        name: data.server_name || data.listen_url,
        url: data.listen_url,
      });
      entry.setup();

      return;
    case 2:
      nodeout = undefined;
      return;
    }
  });

  stream.on('end', function() {
    cb(null, resp);
  });

  Fs.createReadStream(shard.getDataDir() + '/yp.xml').pipe(stream);
};

exports.commit = function(trans, cb) {  // {{{2
  cb(O.log.todo());
};

