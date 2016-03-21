on.input.in = function() {
  csv().
    from.
    string($.in, {}).
    to.
    array(function(val) {
        output({ out: val });
        });
};
