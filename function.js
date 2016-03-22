module.exports = {
  name: "function",
  ns: "utils",
  async: true,
  description: "Execute a function",
  phrases: {
    active: "Executing Function "
  },
  ports: {
    input: {
      "in": {
        type: "any",
        async: true,
        title: "Function Input",
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            $.fn($.in, output);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      fn: {
        type: "function",
        args: ["data",
          "output"
        ],
        title: "Function Body"
      }
    },
    output: {
      out: {
        title: "Std Out",
        type: "string"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  state: {}
}