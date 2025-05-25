let io = null;

module.exports = {
  init(i) { io = i; },
  emitTo(userId, event, data) {
    if (!io) throw new Error('Socket.io not initialised');
    io.to(userId.toString()).emit(event, data);
  }
};
