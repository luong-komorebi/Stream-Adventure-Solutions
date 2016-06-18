/*var ws= require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.end('hello\n');*/
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.end("hello\n");