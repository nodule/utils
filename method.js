module.exports = {
  name: "method",
  ns: "utils",
  async: true,
  description: "Execute a method",
  phrases: {
    active: "Executing method {{input.method}}"
  },
  ports: {
    input: {
      "in": {
        type: "array",
        async: true,
        title: "Arguments",
        description: "arguments to be applied to this method",
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.instance[$.method].apply($.instance, $.in))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      instance: {
        type: "function",
        title: "Instance",
        description: "instance to invoke this method on"
      },
      method: {
        type: "string",
        title: "Method name"
      }
    },
    output: {
      out: {
        title: "Out",
        type: "any"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  state: {}
}