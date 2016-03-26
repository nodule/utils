module.exports = {
  name: "interval",
  ns: "util",
  async: true,
  description: "Repeats the input",
  phrases: {
    active: "Repeating input every {{input.interval}} milliseconds."
  },
  expose: ["setInterval"],
  ports: {
    input: {
      "in": {
        type: "any",
        title: "Input",
        async: true,
        description: "Input to be repeated (if any)",
        "default": null,
        fn: function __IN__(data, x, source, state, input, $, output, setInterval) {
          var r = function() {
            // automatically picked up by interval
            state.data = $.get('in');
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      interval: {
        type: "number",
        title: "Interval",
        description: "Interval in milliseconds",
        format: "time",
        required: true,
        fn: function __INTERVAL__(data, x, source, state, input, $, output, setInterval) {
          var r = function() {
            state.interval = $.interval;

            if (state.timer) {
              // already running reset
              clearInterval(state.timer);
            }

            state.doInterval();
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      stop: {
        type: "any",
        title: "Stop",
        async: true,
        fn: function __STOP__(data, x, source, state, input, $, output, setInterval) {
          var r = function() {
            if (state.timer) {
              clearInterval(state.timer);
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      start: {
        type: "any",
        title: "Start",
        async: true,
        fn: function __START__(data, x, source, state, input, $, output, setInterval) {
          var r = function() {
            // reject start if no data yet
            if (undefined === state.data) {
              return false;
            }

            // reject start if no interval value yet
            if (undefined === state.interval) {
              return false;
            }

            if (!state.timer) {
              state.doInterval();
            }
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
        title: "Output",
        description: "Outputs the repeated input"
      }
    }
  },
  state: {
    doInterval: function() {
      state.timer = setInterval(function() {
        output({
          out: state.data
        });
      }, state.interval);
    }
  }
}