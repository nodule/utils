output = function() {
  csv().
  from.
  string(input.in, {}).
  to.
  array(function(data) {
    cb({ out: data });
  });
};
