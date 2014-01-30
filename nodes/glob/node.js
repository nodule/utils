output = function (cb) {

  var g = chi.group('xmatch', cb);

  var mg = new glob.Glob(input.match, {}, function (err, matches) {

    cb({
      matches: matches
    });

    g.done();

    done();

  });

  mg.on('match', function (match) {

    cb({
      match: match
    }, g.item());

  });

  mg.on('error', function (err) {

    cb({
      error: err
    });

  });

  mg.on('abort', function () {

    cb({
      abort: null
    });

  });

}
