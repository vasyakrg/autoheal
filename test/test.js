"use strict";
const http = require('http');

function createServer () {
	return http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('port 80 - OK\n');
	}).listen(80);
}

let server = createServer();

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if (server) {
		server.close();
		server = null;
		res.end('Shutting down port 80\n');
	} else {
		server = createServer();
		res.end('Starting up port 80\n');
	}
}).listen(3000);
