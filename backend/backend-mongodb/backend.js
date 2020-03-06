const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var db;
mongoClient.connect('mongodb://localhost:27017', function(error, _db) {
    if (error) {
		console.log(error);
	} else {
	  db = _db.db('adopteundev');
	}
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(8084);

app.get('/api/devs', function (req, res) {  
  db.collection('devs').find().toArray(function(error, devs) {
	res.json(devs);
  });
});

app.get('/api/devs/:id', function(req, res) {
  db.collection('devs').findOne({ _id: new ObjectID(req.params.id) }, function(error, result) {
	  console.log('get ' + req.params.id + ' ' + result);
    res.json(result);
  });
});

app.post('/api/devs', function (req, res) {
  var id = req.body._id;
  if(req.body._id) {
	req.body._id = new ObjectID(req.body._id);
  }
  console.log('attempting to save ');
  console.log(req.body);
  db.collection('devs').save(req.body, null, function (error, results) {
    if (error) throw error;
	console.log(results);
	if(id) {
		db.collection('devs').findOne({ _id: new ObjectID(id) }, function(error, result) {
		  console.log('get ' + id + ' ' + result);
		  res.json(result);
		});
	} else {
		res.json(results.ops[0]);
	}
  });
});

app.delete('/api/devs/:id', function(req, res) {
  db.collection('devs').remove({ _id: new ObjectID(req.params.id) }, function(error, result) {
    res.json();
  });
});
