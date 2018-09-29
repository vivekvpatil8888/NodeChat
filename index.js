//following will extract the dependencies and include 
var express = require('express');

var socket = require('socket.io');

var app = express();

var port = process.env.PORT || 8000

var server = app.listen(port, function() {

    console.log("The server is listening on the port 8000");
});


app.use(express.static('public'));

//making socket connection

var io = socket(server); //creates connection to server

//when connection is done call following function.
//
io.on('connection', function(socket) {

    socket.on("chat", function(data) {
       
        io.sockets.emit("chat", data);

    });

    // user typing event
    socket.on("typing", function(data) {

        socket.broadcast.emit("typing", data); // brodcast, it will be displayed on others windows

    });

});


