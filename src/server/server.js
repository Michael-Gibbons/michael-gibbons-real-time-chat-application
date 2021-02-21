const Koa = require('koa');
const app = new Koa();
const PORT = 8081 || process.env.PORT;

var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});