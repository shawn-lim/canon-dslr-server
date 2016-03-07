var express = require('express');
var http = require("http");
var app = express();
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var app = express();
var server = http.createServer(app);


app.get('/capture.jpg', function(req, res) {
	var cmd = "gphoto2 --capture-image-and-download --stdout";
	var child = spawn('gphoto2 --capture-image-and-download --stdout');

	child.stdout.pipe(req);
});

server.listen('8081', function(){
		console.log('Server listening on port 8081');
});
