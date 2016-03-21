output = function (cb) {
  var g = chi.group('xmatch', cb);

  // required to have the above xmatch always be send out first
  // maybe force this with the .group() api and
  // make the third/second parameter the function to be executed
  setTimeout(function() {
    var mg = new glob.Glob($.match, {}, function (err, matches) {
      cb({
        matches: $.create(matches)
      });

      g.done();

      done();
    });

    mg.on('match', function (match) {
      cb({
        match: $.create(match)
      }, g.item());
    });

    mg.on('error', function (err) {
      cb({error: $.create(err)});
    });

    mg.on('abort', function () {
      cb({abort: $.create(null)});
    });
  }, 0)
}
