on.input.in = function() {

  // \n replace shouldn't be necessary.
  if(typeof data === 'string') {
    data = data.replace('\n', '');
  }
  var d = new buffer.Buffer(data, input.from);
  output( { out: d.toString(input.to) });
};
