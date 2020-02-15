//Imports
const express = require('express');
const debug = require('debug')('http');
const http = require('http');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const react = require('react');
const mongoose = require('mongoose');
const parser = require('body-parser');

const app = express();
app.use(parser.json());

// import mongoose models
const Users = require('./models/user.js');
const Events = require('./models/event.js');





const dbUrl = "mongodb+srv://bertalay:gZHQqJ1Fg0AkB1S2@cluster0-ecpkw.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
mongoose.connect(dbUrl);




//App behavior
//Gets all events
app.get('/events', (req, res) =>{
  console.log("Finding all events");
  Events.find({}).then(found => {
    return res.json(found);
  }).catch(err => console.log(err));
});

//Get event by eventname
app.get('/events/:eventname', (req, res) => {
  console.log("Finding event:" + req.params.eventname);
  Events.find({ eventName: req.params.eventname }).then(found => {
    return res.json(found);
  }).catch(err => console.log(err));
});

/*
//Filters by time
app.get('/events/:timeRange', (req, res) => {
  var startTime = req.query.start
  var endTime = req.query.end

  Events.find({}).then(found => {
    return res.json(found);
  }).catch(err => console.log(err));
});
*/

//Gets info of a single user
app.get('/users/:username', (req, res) =>{
  console.log("Finding user:" + username);
  Users.findOne({ username: username }).then(found => {
    return res.json(found);
  }).catch(err => console.log(err));
});


// signup user [username] for event [eventname]
app.put('/events/:eventname/:username', (req, res) => {
  console.log("Signing user:" + username + " up for event:" + eventname);
  let user = User.findOne({ username: username });
  let event = Events.findOne({ eventName: eventname });
  Events.updateOne({ _id: event._id }, { $push: {users: user._id } });
  Users.updateOne({ _id: user._id }, { $set: {events: event._id } });
});


// create user
app.post('/user', (req, res) => {
  var newUser = new User({
    username: req.username,
    password: User.hashPassword(req.password),
    events: [],
    email: req.email
  });
  newUser.save().then(() => console.log("Made user:" + req.username));
});


// create event
app.post('/event', (req, res) => {
  var newEvent = new Events({
    eventName: req.eventName,
    users: [],
    startTime: req.startTime,
    endTime: req.endTime
  });
  newEvent.save().then(() => console.log("Made event:" + req.eventName));
});





// big testing energy
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
