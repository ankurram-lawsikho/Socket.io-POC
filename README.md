# Socket.io Real-time Messaging POC

A lightweight Proof of Concept demonstrating real-time communication using Socket.io for instant messaging between multiple users.

## Features

- **Real-time messaging**: Messages appear instantly across all connected clients
- **Multi-user support**: Multiple users can join the same chat session
- **User presence**: Shows who's online and when users join/leave
- **Typing indicators**: Real-time typing status updates
- **Modern UI**: Clean, responsive design with smooth animations
- **No authentication required**: Simple username-based identification for POC purposes

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

4. **Test multi-user functionality**:
   - Open multiple browser tabs/windows
   - Enter different usernames
   - Send messages and see them appear in real-time across all clients

## Project Structure

```
SocketIO-POC/
├── server.js          # Node.js/Express server with Socket.io
├── package.json       # Dependencies and scripts
├── public/
│   └── index.html     # Single-page client application
└── README.md          # This file
```

## Technical Implementation

### Server-side (Node.js/Express)
- Express server serving static files
- Socket.io integration for real-time communication
- User management and message broadcasting
- Event handling for connections, messages, and disconnections

### Client-side (HTML/JavaScript)
- Socket.io client library integration
- Real-time message display and input handling
- User interface with modern styling
- Typing indicators and connection status

## Socket Events

### Client to Server
- `user-join`: User joins the chat with username
- `send-message`: Broadcast message to all users
- `typing`: Send typing status updates

### Server to Client
- `new-message`: Receive new messages from other users
- `user-joined`: Notification when user joins
- `user-left`: Notification when user leaves
- `user-list`: List of currently online users
- `user-typing`: Typing indicator updates

## Development

For development with auto-restart:
```bash
npm run dev
```

## Use Cases

This POC serves as a foundation for:
- Chat applications
- Real-time notifications
- Collaboration tools
- Live updates in web applications
- Any feature requiring instant data synchronization

## Browser Compatibility

- Modern browsers with WebSocket support
- Chrome, Firefox, Safari, Edge (latest versions)

## Next Steps

To extend this POC:
1. Add message persistence (database integration)
2. Implement user authentication
3. Add private messaging capabilities
4. Include file/image sharing
5. Add message history and search
6. Implement user roles and permissions
