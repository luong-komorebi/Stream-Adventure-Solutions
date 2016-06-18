var split = require('split');
var through = require('through');
var counter = 1;
process.stdin.pipe(through(function(buffer, encoding, next) {
	if (counter % 2 === 0) {
		this.push(buffer.toString().toUpperCase());
	}
	else this.push(buffer.toString().toLowerCase());
	counter++;
}), function(done) {
	done();
}).pipe(process.stdout);

//Official way (very good)

/*var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;
*/