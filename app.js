const express = require('express');
const debug = require('debug')('http');
const http = require('http');
const mongo = require('mongodb');
const react = require('react');

const app = express();

debug('booting');

app.get('/', function (req, res) {
  console.log('got to route /');
  res.send('Homepage');
})

function testing() {
    console.log(3);
}

app.get('/test', function (req, res) {
  testing();
  res.send("wahh");
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
