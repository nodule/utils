module.exports = {
  name: "xml2js",
  ns: "utils",
  description: "Simple XML to JavaScript object converter",
  phrases: {
    active: "Converting XML to Object"
  },
  ports: {
    input: {
      xml: {
        type: "string",
        format: "xml",
        title: "XML"
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error Object"
      },
      result: {
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      xml2js: require('xml2js')
    }
  },
  fn: function xml2js(input, output, state, done, cb, on, xml2js) {
    var r = function() {
      xml2js.xml2js(input.xml, function xml2jsCallback(error, result) {
        cb({
          error: error,
          result: result
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}