const express = require('express');
const debug = require('debug')('http');
const http = require('http');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const react = require('react');

const app = express();

// import mongoose models
const User = require('models/user');

debug('booting');

app.get('/', function (req, res) {
  console.log('got to route /');
  res.send('Homepage');
})

app.get('/test/create/:collectionName', function (req, res) {
  console.log("wehhh");
  createCollection(req.params.collectionName);
  res.send("wahh");
})

app.get('/test/insert/:collectionName/:userName/:ssn', function (req, res) {
  console.log("inseeeeeeh");
  insertCollection(req.params.collectionName, req.params.userName, req.params.ssn);
  res.send("snseeeeehhh");
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


var dbUrl = "mongodb+srv://bertalay:gZHQqJ1Fg0AkB1S2@cluster0-ecpkw.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

function createCollection(collectionName) {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");
    dbo.createCollection(collectionName, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
}

function insertCollection(collectionName, userName, ssn) {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");
    var myobj = { name: userName, ssn: ssn };
    dbo.collection(collectionName).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}



server.listen('8000');
server.on('listening', onListening);
