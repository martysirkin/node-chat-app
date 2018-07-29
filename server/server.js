//const _ = require('lodash');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app!',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: `New user joined the chat.`,
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        message.createdAt = 123;
        console.log('Received message: ', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

});



server.listen(port, () => {
    console.log(`Started on port ${port}`);
  });
  
//module.exports = {app};
