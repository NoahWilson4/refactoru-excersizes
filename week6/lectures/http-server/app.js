var http = require('http');

var handleRequests = function (request, response){
	console.log('request came in');
	console.log(request.url);

	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	response.end('Hello, you requested ' + request.url);
};

var server = http.createServer(handleRequests);

server.listen(3000);
console.log('server running on 3000')