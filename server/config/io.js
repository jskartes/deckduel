let io;

const init = server => {
  io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

  io.sockets.on('connection', socket => {
    console.log(`User connected (socket id: ${socket.id})`);

    socket.on('join', room => {
      console.log(`Socket ${socket.id} joining room ${room}`);
      socket.room = room;
      socket.join(room);
    });

    socket.on('message', message => {
      io.to(socket.room).emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected (socket id: ${socket.id})`);
    });
  });
}

module.exports = {
  init
};
