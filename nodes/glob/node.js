output = function (cb) {
  var g = chix_group.send.create()

  setTimeout(function() {
    var mg = new glob.Glob($.match, {}, function (err, matches) {
      cb({
        matches: $.create(matches)
      });

      cb({xmatch: g.close()})

      done();
    });

    mg.on('match', function (match) {
      cb({match: g.write($.create(match))});
    });

    mg.on('error', function (err) {
      cb({error: $.create(err)});
    });

    mg.on('abort', function () {
      cb({abort: $.create(null)});
    });
  }, 0)
}
