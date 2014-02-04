var r = new RegExp(input.regexp, 'g');
var res = r.exec(input.in);
if(Array.isArray(res)) {
  output.out = res;
}
