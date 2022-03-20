var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/local', function(req, res){
  res.sendFile(__dirname + '/local.html');
});

app.get('/remote', function(req, res){
  res.sendFile(__dirname + '/remote.html');
})

io.on('connection', function(socket){
  // remote
  // local
  // ice
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('ice', (msg) => {
    io.emit('ice', msg);
  });

  socket.on('local', (msg) => {
    io.emit('local', msg);
  });

  socket.on('remote', (msg) => {
    io.emit('remote', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
