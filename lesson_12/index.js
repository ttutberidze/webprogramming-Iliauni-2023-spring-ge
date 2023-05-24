const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const {createUser, deleteUser, findUser} = require('./helper');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {

    socket.on('join', (username) => {
        const user = createUser(socket.id, username);
        socket.emit('new-message', `Welcome ${user.username}`);
        socket.broadcast.emit('new-message', `${user.username} has joined the chat`);
    })

    socket.on('message-received', (message) => {
        const user = findUser(socket.id);
        socket.emit('new-message', `You: ${message}`);
        socket.broadcast.emit('new-message', `${user.username}: ${message}`)
    })

    socket.on('disconnect', () => {
        const user = findUser(socket.id);
        if(user) {
            socket.broadcast.emit('new-message', `${user.username} left the chat`);
            deleteUser(socket.id);
        }
        
    })
})
 
server.listen(8888);