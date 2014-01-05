output = function(cb) {

  var mg = new glob.Glob(input.match, {}, function(err, matches) {

    cb({
      matches: matches
    });
  
  });

  mg.on('match', function(match) {

    cb({
      match: match
    });

  });

  mg.on('error', function(err) {

    cb({
      error: err 
    });

  });

  mg.on('abort', function() {

    cb({
      abort: null 
    });

  });

}
