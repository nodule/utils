module.exports = {
  name: "wait",
  ns: "util",
  async: true,
  description: "Holds the input for a while",
  phrases: {
    active: "Holding input for {{input.timeout}} milliseconds."
  },
  expose: ["setTimeout"],
  ports: {
    input: {
      "in": {
        type: "any",
        title: "Input",
        description: "Input to be delayed",
        async: true,
        fn: function __IN__(data, x, source, state, input, $, output, setTimeout) {
          var r = function() {
            setTimeout(function() {
              cb({
                out: $.get('in')
              });
            }, $.timeout);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      timeout: {
        type: "number",
        title: "Timeout",
        description: "Timeout in milliseconds",
        format: "time"
      }
    },
    output: {
      out: {
        type: "any",
        title: "Output",
        description: "Outputs the delayed input"
      }
    }
  },
  state: {}
}