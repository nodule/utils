output = function (cb) {

  var child = child_process.exec(input['in'],
    function (error, stdout, stderr) {

      if(stderr) {
        cb({
          error: stderr
        });
      } else if (error) {
        cb({
          error: error
        });
      } else {
        cb({
          out: stdout
        });
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
    cb({ error: err });
  });

  if ($.data) {
    child.stdin.end($.data, $.encoding, function () {
      cb({
        flushed: true
      });
    });
  }

};
