on.input.in = function() {
  output({
    out: $.write('in', $.instance[$.method].apply($.instance, $.in))
  });
}
