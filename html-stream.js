/*var trumpet = require('trumpet')
var through = require('through')

var to_upper = function(buffer) {
	this.queue(buffer.toString().toUpperCase())
}

var tr = trumpet()
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()
stream.pipe(through(to_upper)).pipe(stream)*/

 var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();
  
  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);
  
  process.stdin.pipe(tr).pipe(process.stdout);
