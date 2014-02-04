var r = new RegExp(input.regexp, 'g');
var res = input.in.match(r);
if(res) {
  output.out = res;
}
