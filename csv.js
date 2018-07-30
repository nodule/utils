module.exports = {
  name: "csv",
  ns: "utils",
  title: "CSV",
  async: true,
  description: "NodeCSV Parser",
  phrases: {
    active: "Parsing CSV"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "CSV",
        async: true,
        description: "A Comma Seperated Values document",
        required: true,
        fn: function __IN__(data, source, state, input, $, output, csv) {
          var r = function() {
            csv().
            from.
            string($.in, {}).
            to.
            array(function(val) {
              output({
                out: $.write('in', val)
              });
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        type: "array",
        title: "Output",
        description: "An array of records"
      }
    }
  },
  dependencies: {
    npm: {
      csv: require('csv')
    }
  },
  state: {},
  on: {}
}