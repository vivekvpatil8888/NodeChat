//client side code

 
var socket = io();

var message = document.getElementById("message");


var handle = document.getElementById("handle");


var btn = document.getElementById("send");


var output = document.getElementById("output");

var feedback = document.getElementById("feedback");

// the send button
btn.addEventListener("click", function() {

    socket.emit("chat", {message:message.value, handle:handle.value}); // starting 'chat' event

});

// 'keypress' event should be started with any typing starts here in message
message.addEventListener("keypress", function() {

    socket.emit("typing", handle.value);
    
});

socket.on("chat", function(data) {
    feedback.innerHTML = "";
    message.value = "";
    output.innerHTML += '<p><strong> ' + data.handle + ' </strong> : ' + data.message +'</p>';
});

socket.on("typing", function(data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message... </em></p>';
});