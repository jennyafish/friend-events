const express = require('express');
const debug = require('debug')('http');
const http = require('http');
const mongo = require('mongodb'); 

const app = express();

debug('booting');

app.get('/', function (req, res) {
  debug('got to route /');
  res.send('Homepage');
})

function testing() {
    console.log(3);
}

app.get('/test', function (req, res) {
  testing();
  res.send("wahh");
})

const server = http.createServer(app);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



server.listen('8000');
server.on('listening', onListening);
