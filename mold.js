module.exports = {
  name: "mold",
  ns: "object",
  description: "Mold an object from two different inputs and name them",
  phrases: {
    active: "Molding object from {{input.name1}} & {{input.name2}}"
  },
  ports: {
    input: {
      name1: {
        type: "string",
        title: "First value's name",
        required: true
      },
      value1: {
        type: "any",
        title: "First value",
        required: true
      },
      name2: {
        type: "string",
        title: "Second value's name",
        required: true
      },
      value2: {
        type: "any",
        title: "Second value",
        required: true
      }
    },
    output: {
      object: {
        type: "object",
        title: "Object"
      }
    }
  },
  fn: function mold(input, output, state, done, cb, on) {
    var r = function() {
      var obj = {}

      obj[input.name1] = input.value1
      obj[input.name2] = input.value2

      output = {
        object: obj
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