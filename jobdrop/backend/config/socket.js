module.exports = (io) => {
  io.on('connection', (socket) => {
    const { userId } = socket.handshake.auth;
    if (!userId) return socket.disconnect();

    socket.join(userId); // user-specific room

    socket.on('disconnect', () => {
      socket.leave(userId);
    });
  });
};
