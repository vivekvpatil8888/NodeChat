//following will extract the dependencies and include 
var express = require('express');

var socketIO = require('socket.io');

const PORT = process.env.PORT || 8000

const server = express()

    .use(express.static('public'))
    .listen(PORT, ()=> {
    console.log(`The server is listening on the port ${PORT}`);
});


//app.use(express.static('public'));

//making socket connection

const io = socketIO(server);


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


