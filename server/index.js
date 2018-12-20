const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Contains the players
let players = {};

// Control the status of the game in real time
io.on('connection', (socket) => {

    // Listen to the entry of a new player and add it to the players
    socket.on('new player', () => {
        players[socket.id] = {
            x: 300,
            y: 300
        };
    });

    // Listen and update the movement of the players
    socket.on('movement', (data) => {
        let player = players[socket.id] || {};
        player.x = data.x;
        player.y = data.y;
    });

    // Listen to a player's exit and remove him from the players
    socket.on('disconnect', () => {
        delete players[socket.id];
    });
});

// Emit the game status to all players
setInterval(() => {
    io.sockets.emit('state', players);
}, 1000 / 60);
