module.exports = {
  name: "error",
  ns: "console",
  description: "Console Error",
  async: true,
  phrases: {
    active: "Logging error to console"
  },
  ports: {
    input: {
      msg: {
        type: "any",
        title: "Log message",
        description: "Logs an error message to the console",
        async: true,
        required: true,
        fn: function __MSG__(data, x, source, state, input, $, output) {
          var r = function() {
            console.error($.msg);
            output({
              out: $.get('msg')
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
        type: "any",
        title: "Log message"
      }
    }
  },
  state: {}
}