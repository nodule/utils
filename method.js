module.exports = {
  name: "method",
  ns: "utils",
  description: "Execute a method",
  phrases: {
    active: "Executing method {{input.method}}"
  },
  ports: {
    input: {
      "in": {
        type: "array",
        title: "Arguments",
        description: "arguments to be applied to this method",
        "default": []
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
  fn: function method(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.write('in', $.instance[$.method].apply($.instance, $.in))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}