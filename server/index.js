const express = require ('express');

const app = express();
const PORT = 5000;

const http = require('http').Server(app);

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

const users = [];

socketIO.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('message', (data) => {
        socketIO.emit('response', data);
    });

    socket.on('newLogin', (data) => {
        users.push(data);
        socketIO.emit('responseNewLogin', users)
    });

    socket.on('disconnect', ()=>{
        console.log(`Disconnected ${socket.id}`);
    });

});

http.listen(PORT, () => {
    console.log('Server working')
});
