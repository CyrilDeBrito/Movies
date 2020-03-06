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
	  db = _db.db('mov');
	}
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(8084);

app.get('/api/movs', function (req, res) {  
  db.collection('movs').find().toArray(function(error, movs) {
	res.json(movs);
  });
});

app.get('/api/movs/:id', function(req, res) {
  db.collection('movs').findOne({ _id: new ObjectID(req.params.id) }, function(error, result) {
	  console.log('get ' + req.params.id + ' ' + result);
    res.json(result);
  });
});

app.post('/api/movs', function (req, res) {
  var id = req.body._id;
  if(req.body._id) {
	req.body._id = new ObjectID(req.body._id);
  }
  console.log('attempting to save ');
  console.log(req.body);
  db.collection('movs').save(req.body, null, function (error, results) {
    if (error) throw error;
	console.log(results);
	if(id) {
		db.collection('movs').findOne({ _id: new ObjectID(id) }, function(error, result) {
		  console.log('get ' + id + ' ' + result);
		  res.json(result);
		});
	} else {
		res.json(results.ops[0]);
	}
  });
});

app.delete('/api/movs/:id', function(req, res) {
  db.collection('movs').remove({ _id: new ObjectID(req.params.id) }, function(error, result) {
    res.json();
  });
});
