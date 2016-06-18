var http = require('http');
var through = require('through2');
var stream = through(function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}, function end(done) {
	done();
});
http.createServer(function(request, response) {
	if (request.method === 'POST') {
		request.pipe(stream).pipe(response);
	} else request.end();
}).listen(process.argv[2]);


// Here's the reference solution:
/*var http = require('http');
  var through = require('through2');
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
*/