const express = require ('express');

const app = express();
const PORT = 5000;

const http = require('http').Server(app);

const cors = require('cors');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})
socketIO.on('connection', (socketT) => {
    console.log(`User ${socketT.id} connected`);
    socketT.on('message', (data) => {
        socketIO.emit('response', data)
    });


    socketT.on('disconnect', ()=>{
        console.log(`Disconnected ${socketT.id}`);
    });

});


app.get('api', (req, res) => {
    res.json({message: 'Hi'})
});

http.listen(PORT, () => {
    console.log('Server working')
});

// TODO:* cors
