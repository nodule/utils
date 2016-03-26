module.exports = {
  name: "log",
  ns: "console",
  description: "Console log",
  async: true,
  phrases: {
    active: "Logging to console"
  },
  ports: {
    input: {
      msg: {
        type: "any",
        title: "Log message",
        description: "Logs a message to the console",
        async: true,
        required: true,
        fn: function __MSG__(data, x, source, state, input, $, output) {
          var r = function() {
            console.log($.msg);
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