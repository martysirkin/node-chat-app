var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server.');

    socket.emit('createEmail', {
        to: 'fred@example.com',
        text: 'Hi there!'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
    console.log('New message coming in...', message);
});