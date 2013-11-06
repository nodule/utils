var slow = {
  down: function(to, cb) {
   setTimeout(function () { cb(input.in); }, to)
  }
}
output = [slow, 'down', input.timeout]
