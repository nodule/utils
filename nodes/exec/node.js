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
      encoding: input.encoding,
      maxBuffer: input.maxBuffer,
      killSignal: input.killSignal,
      cwd: input.cwd,
      env: input.env
    });

  if (input.in) {
    child.stdin.end(input.in, input.encoding, function () {
      cb({
        flushed: true
      });
    });
  }

};
