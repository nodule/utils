output = function (cb) {

  var child = child_process.exec(input['in'],
    function (error, stdout, stderr) {
      cb({
        error: error,
        out: stdout
      });

      if (stderr) {
        cb({
          error: stderr
        });
      }

      done();
    }, {
      encoding: input.encoding,
      maxBuffer: input.maxBuffer,
      killSignal: input.killSignal,
      cwd: input.cwd,
      env: input.env
    });

  if (input.data) {
    child.stdin.end(input.data, input.encoding, function () {
      cb({
        flushed: true
      });
    });
  }

};