const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Store connected users
const connectedUsers = new Map();

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle user joining
  socket.on('user-join', (username) => {
    connectedUsers.set(socket.id, username);
    socket.broadcast.emit('user-joined', username);
    socket.emit('user-list', Array.from(connectedUsers.values()));
    console.log(`${username} joined the chat`);
  });

  // Handle incoming messages
  socket.on('send-message', (data) => {
    const username = connectedUsers.get(socket.id) || 'Anonymous';
    const messageData = {
      id: Date.now(),
      username: username,
      message: data.message,
      timestamp: new Date().toLocaleTimeString()
    };
    
    // Broadcast message to all connected clients
    io.emit('new-message', messageData);
    console.log(`Message from ${username}: ${data.message}`);
  });

  // Handle user typing indicator
  socket.on('typing', (data) => {
    const username = connectedUsers.get(socket.id) || 'Anonymous';
    socket.broadcast.emit('user-typing', { username, isTyping: data.isTyping });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const username = connectedUsers.get(socket.id);
    if (username) {
      connectedUsers.delete(socket.id);
      socket.broadcast.emit('user-left', username);
      console.log(`${username} left the chat`);
    }
  });
});

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
