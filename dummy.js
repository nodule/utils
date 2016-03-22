module.exports = {
  name: "dummy",
  ns: "utils",
  title: "Dummy",
  description: "Takes an input and passes it to output.",
  phrases: {
    active: "Dummy"
  },
  ports: {
    input: {
      "in": {
        type: "any",
        title: "Input"
      }
    },
    output: {
      out: {
        type: "any",
        title: "Output"
      }
    }
  },
  fn: function dummy(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.get('in')
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}