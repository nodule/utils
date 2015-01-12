module.exports = {
  name: "msg",
  ns: "console",
  description: "Logs a message to the console (sync version). Use this to log system messages.",
  phrases: {
    active: "{{input.msg}}"
  },
  ports: {
    input: {
      msg: {
        type: "any",
        title: "Log message",
        required: true
      }
    },
    output: {
      msg: {
        type: "any",
        title: "Log Message"
      }
    }
  },
  fn: function msg(input, output, state, done, cb, on) {
    var r = function() {
      console.log(input.msg)
      output.msg = input.msg;
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}