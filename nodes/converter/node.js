on.input.in = function() {
  var d = new buffer_browserify(data, input.from);
  output( { out: d.toString(input.to) });
};
