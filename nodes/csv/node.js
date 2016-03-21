on.input.in = function() {
  csv().
    from.
    string(input.in, {}).
    to.
    array(function(val) {
        output({ out: val });
        });
};
