module.exports = {
  name: "if",
  ns: "utils",
  title: "IF",
  description: "Accepts a value on one port and checks it against an if statement.",
  phrases: {
    active: "Deciding IF"
  },
  ports: {
    input: {
      value: {
        type: "any",
        title: "Value"
      },
      "in": {
        type: "string",
        title: "IF statement",
        description: "Any if statement, the input is available as `in`. e.g. in.required === true, providing the input object has a property `required`, compilation failures will go to the error port. The input value will be passed either to the Yes or No port."
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error",
        description: "Error"
      },
      yes: {
        type: "any",
        title: "Yes"
      },
      no: {
        type: "any",
        title: "No"
      }
    }
  },
  dependencies: {
    npm: {
      iffi: require('iffi')
    }
  },
  fn: function _if(input, $, output, state, done, cb, on, iffi) {
    var r = function() {
      try {
        if (iffi($.in, {
            value: $.value
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