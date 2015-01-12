module.exports = {
  name: "merge",
  ns: "object",
  description: "Merges two object together, note: overlapping keys will overwrite",
  phrases: {
    active: "Merging objects together"
  },
  ports: {
    input: {
      in1: {
        type: "object",
        title: "First Object",
        required: true
      },
      in2: {
        type: "object",
        title: "Second Object",
        required: true
      }
    },
    output: {
      out: {
        type: "object",
        title: "Merged Object"
      }
    }
  },
  fn: function merge(input, output, state, done, cb, on) {
    var r = function() {
      for (var key in input.in1) {
        input.in2[key] = input.in1[key];
      }

      output = {
        out: input.in2
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