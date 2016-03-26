module.exports = {
  name: "if2",
  ns: "utils",
  title: "IF2",
  description: "Accepts values on two ports and checks it against an if statement.",
  phrases: {
    active: "Deciding IF"
  },
  ports: {
    input: {
      value: {
        type: "any",
        title: "Input Value",
        description: "The value to be checked"
      },
      compare: {
        type: "any",
        title: "Comparant Value"
      },
      "in": {
        type: "string",
        title: "IF statement",
        description: "Any if statement, the input is available as `in`. e.g. in.required === true, providing the input object has a property `required`, compilation failures will go to the output port."
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error",
        description: "Error"
      },
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
  dependencies: {
    npm: {
      iffi: require('iffi')
    }
  },
  fn: function if2(input, $, output, state, done, cb, on, iffi) {
    var r = function() {
      try {
        if (iffi($.in, {
            'value': $.value,
            'compare': $.compare
          })) {
          output = {
            yes: $.create($.value)
          };
        } else {
          output = {
            no: $.create($.value)
          };
        }
      } catch (e) {
        output = {
          error: $.create(e)
        };
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