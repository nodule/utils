on.input.in = function() {
  setTimeout(function () {
    output({out: $.get('in')});
  }, $.timeout);
};
