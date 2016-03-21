on.input.in = function() {

  // \n replace shouldn't be necessary.
  if(typeof input.in === 'string' && input.from === 'base64') {
    input.in = input.in.replace('\n', '');
  }
  var d = new buffer.Buffer(input.in, input.from);
  output( { out: d.toString(input.to) });
};
