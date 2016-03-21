output = function (cb) {
  var child = child_process.exec(input['in'],
    function (error, stdout, stderr) {

      if(stderr) {
        cb({error: $.create(stderr)});
      } else if (error) {
        cb({error: $.create(error)});
      } else {
        cb({out: $.create(stdout)});
      }

      done();
    }, {
      encoding: $.encoding,
      maxBuffer: $.maxBuffer,
      killSignal: $.killSignal,
      cwd: $.cwd,
      env: $.env
    });

  child.on('error', function(err) {
    cb({ error: $.create(err) });
  });

  if ($.data) {
    child.stdin.end($.data, $.encoding, function () {
      cb({flushed: $.create(true)});
    });
  }
};
