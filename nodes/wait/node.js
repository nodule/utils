on.input.in = function() {
  setTimeout(function () {
    cb({out: $.get('in')});
  }, $.timeout);
};
