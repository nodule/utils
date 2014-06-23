on.input.in = function() {
  var d = new buffer(data, input.from);
  output( { out: d.toString(input.to) });
};
