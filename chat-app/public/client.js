let socket = io.connect('http://localhost:3222');
socket.on('connect', function(data){
    socket.emit('join', 'Hello server from client');
});

socket.on('thread', function(data){
    let thread = document.getElementById('thread');
    let message = document.createElement('li');
    if(data != ''){
        message.appendChild(document.createTextNode(data));
    }
    
    thread.appendChild(message);
});

function sendMessage(){
    let messageElem = document.getElementById('message');
    socket.emit('messages', messageElem.value);
    messageElem.value = '';

    return false;
}

document.getElementById('send').onclick = sendMessage;