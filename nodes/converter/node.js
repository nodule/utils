on.input.in = function() {
  // \n replace shouldn't be necessary.
  if(typeof $.in === 'string' && $.from === 'base64') {
    $.in = $.in.replace('\n', '');
  }
  var d = new buffer.Buffer($.in, $.from);
  output( { out: $.write('in', d.toString($.to)) });
};
