const Koa = require('koa');
const app = new Koa();
const PORT = 8081 || process.env.PORT;

var server = require('http').createServer(app.callback());
let CLIENT = 'http://localhost:8080';
const io = require("socket.io")(server, {
  cors: {
    origin: CLIENT,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});