// Use http lib
var http = require('http');

// Http lib create a server
var server = http.createServer(function(req, res) {
	// We have a callback here
	// Request and result

	// Response sends out code 200
	res.writeHead(200);

	// Response sends content
	res.end('Hi everybody!');
});

// The http server keeps listening 8080
server.listen(8080);
