const express = require('express');
const debug = require('debug')('http');
const http = require('http');
const react = require('react');

const app = express();

debug('booting');

app.get('/', function (req, res) {
  console.log('got to route /');
  res.send('Homepage');
})


app.post('/events/create')


const server = http.createServer(app);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Listening on localhost:8000'); // above didn't work :(
}

server.listen('8000');
server.on('listening', onListening);
