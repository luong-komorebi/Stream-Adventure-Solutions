var concat= require('concat-stream');
process.stdin.pipe(concat(function(buffer){
	process.stdout.write(buffer.toString().split('').reverse().join(''));
}))

// Here's the reference solution:
/*
  var concat = require('concat-stream');
  
  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));
*/