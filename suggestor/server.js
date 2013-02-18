// Include http module,
var http = require("http"),
	// And url module, which is very helpful in parsing request parameters.
	url = require("url"),
	//pull in my "suggestor" module
	suggestor = require("./suggestor.js");
// Create the server.
http.createServer(function(request, response) {
	// Attach listener on end event.
	request.on('end', function() {
		// Parse the request for arguments and store them in _get variable.
		// This function parses the url from request and returns object representation.
		var _get = url.parse(request.url, true).query;
		// Write headers to the response.
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		//function time
		var yourData = _get['data'];
		response.end(JSON.stringify(suggestor.suggest(yourData)));
	});
	// Listen on the 8080 port.
}).listen(8080);
