module.exports = {
  name: "converter",
  ns: "utils",
  description: "Convert ascii, utf8, ucs2, base64, binary or hex",
  async: true,
  phrases: {
    active: "Converting from {{input.from}} to {{input.to}}"
  },
  ports: {
    input: {
      "in": {
        type: "any",
        title: "Input",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, buffer) {
          var r = function() {
            // \n replace shouldn't be necessary.
            if (typeof $.in === 'string' && $.from === 'base64') {
              $.in = $.in.replace('\n', '');
            }
            var d = new buffer.Buffer($.in, $.from);
            output({
              out: $.write('in', d.toString($.to))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      from: {
        "enum": ["ascii",
          "utf8",
          "ucs2",
          "base64",
          "binary",
          "hex"
        ],
        type: "string",
        title: "From",
        "default": "utf8"
      },
      to: {
        "enum": ["ascii",
          "utf8",
          "ucs2",
          "base64",
          "binary",
          "hex"
        ],
        type: "string",
        title: "To",
        "default": "utf8"
      }
    },
    output: {
      out: {
        type: "any",
        title: "Output"
      }
    }
  },
  dependencies: {
    npm: {
      buffer: require('buffer')
    }
  },
  state: {},
  on: {}
}