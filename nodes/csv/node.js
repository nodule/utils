on.input.in = function() {

  csv().
  from.
  string(data, {}).
  to.
  array(function(data) {
    output({ out: data });
  });

};
