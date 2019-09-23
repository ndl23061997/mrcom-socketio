module.exports = io => {
  io.of('admin').on("connection", socket => {
    console.log("admin client connect", socket.id);
  });
};
