let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

app.get('/',function(req,res,next){
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(client){
    //console.log('Client Connected'); //for testing connection

    client.on('join', function(data){
        //console.log(data); //for testing connection
    });
    client.on('messages', function(data){
        client.emit('thread', data);
        client.broadcast.emit('thread', data);
    });
});

server.listen('3222');