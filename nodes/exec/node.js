output = function(cb) {

  child_process.exec(input['in'],
  function (error, stdout, stderr) {
      cb({
        error: error,
        stdout: stdout,
        stderr: stderr
      });
  }, {
    encoding: input.encoding,
    maxBuffer: input.maxBuffer,
    killSignal: input.killSignal,
    cwd: input.cwd,
    env: input.env
  });

};
