var express = require('express');
var http = require("http");
var app = express();
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var app = express();
var server = http.createServer(app);


app.get('/', function(req, res) {
	var cmd = "gphoto2 --capture-image-and-download --stdout";
	exec(cmd, function(error, stdout, stderror){
			res.send(stdout);
	})
});

server.listen('8081', function(){
		console.log('Server listening on port 8081');
});
