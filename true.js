module.exports = {
  name: "true",
  title: "true?",
  ns: "conditional",
  description: "Whether the input is true or false",
  phrases: {
    active: "Determining truth"
  },
  ports: {
    input: {
      "in": {
        type: "boolean",
        title: "A boolean"
      }
    },
    output: {
      yes: {
        type: "boolean",
        title: "Yes"
      },
      no: {
        type: "boolean",
        title: "No"
      }
    }
  },
  fn: function _true(input, output, state, done, cb, on) {
    var r = function() {
      output = {
        yes: !!input.in,
        no: !input.in
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