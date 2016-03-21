state.doInterval = function() {
  state.timer = setInterval(function () {
    output({out: state.data});
  }, state.interval);
};

on.input.in = function() {
  // automatically picked up by interval
  state.data = $.get('in');
};

on.input.interval = function() {
  state.interval = $.interval;

  if(state.timer) {
    // already running reset
    clearInterval(state.timer);
  }

  state.doInterval();
};

on.input.start = function() {
  // reject start if no data yet
  if(undefined === state.data) {
    return false;
  }

  // reject start if no interval value yet
  if(undefined === state.interval) {
    return false;
  }

  if(!state.timer) {
    state.doInterval();
  }
};

on.input.stop = function() {
  if(state.timer) {
    clearInterval(state.timer);
  }
};
