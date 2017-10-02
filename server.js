var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res,next) {
    res.sendFile('/index.html');
});

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
        client.emit('messages', 'You are connected');
    });

    client.on('location', function(data){
        if(data !== null){
            console.log(data);

        }
    });


});

server.listen(3000);