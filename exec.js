module.exports = {
  name: "exec",
  ns: "utils",
  description: "Execute a program",
  phrases: {
    active: "Executing {{input.in}}"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "Program String",
        description: "e.g. `cat *.js bad_file | wc -l`"
      },
      data: {
        type: "string",
        title: "Data For StdIn",
        description: "Optional data to be send to stdin, the process executed must be set to expect stdin",
        "default": null
      },
      encoding: {
        type: "string",
        title: "Encoding",
        "default": "utf-8"
      },
      timeout: {
        type: "number",
        title: "Encoding",
        "default": 0
      },
      maxBuffer: {
        type: "number",
        title: "Buffer Maximum",
        "default": 204800
      },
      killSignal: {
        type: "string",
        title: "Kill Signal",
        "default": "SIGTERM"
      },
      cwd: {
        type: "string",
        title: "Current working dir",
        "default": null
      },
      env: {
        type: "string",
        title: "Env",
        "default": null
      }
    },
    output: {
      out: {
        title: "Std Out",
        type: "string"
      },
      flushed: {
        title: "Flushed",
        type: "boolean"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      child_process: require('child_process')
    }
  },
  on: {},
  fn: function exec(input, $, output, state, done, cb, on, child_process) {
    var r = function() {
      var child = child_process.exec($.in,
        function(error, stdout, stderr) {

          if (stderr) {
            output({
              error: $.create(stderr)
            });
          } else if (error) {
            output({
              error: $.create(error)
            });
          } else {
            output({
              out: $.create(stdout)
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
        output({
          error: $.create(err)
        });
      });

      if ($.data) {
        child.stdin.end($.data, $.encoding, function() {
          output({
            flushed: $.create(true)
          });
        });
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}