output = function (cb) {
  var g = chix_group()
  output({xmatch: g.open()})

  setTimeout(function() {
    var mg = new glob.Glob($.match, {}, function (err, matches) {
      cb({
        matches: $.create(matches)
      });

      output({xmatch: g.close()})

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
