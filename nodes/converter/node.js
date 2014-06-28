on.input.in = function() {
  var d = new buffer.Buffer(data, input.from);
  output( { out: d.toString(input.to) });
};
