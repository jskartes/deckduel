const Chat = require('../models/chat');

let io;

const init = server => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    io = require('socket.io')(
      server, {cors: {origin: 'http://localhost:3000'}}
    );
  } else {
    io = require('socket.io')(server);
  }

  io.sockets.on('connection', socket => {
    console.log(`User connected (socket ${socket.id})`);

    socket.on('join', room => {
      console.log(`Socket ${socket.id} joining room ${room}`);
      socket.room = room;
      socket.join(room);
    });

    socket.on('message', async (chatId, user, message) => {
      const chat = await Chat.findById(chatId);
      chat.messages.push({
        author: user,
        content: message
      });
      await chat.save();
      io.to(chatId).emit('update chat', chat);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected (socket ${socket.id})`);
    });
  });
}

module.exports = {
  init
}
