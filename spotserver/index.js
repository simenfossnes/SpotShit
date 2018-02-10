const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const appRoot = path.resolve(__dirname);
const dummGeo = [{lat: 58.163825, lng: 8.010723}, 
  {lat: 58.156054, lng: 8.014143}, 
  {lat: 58.156601, lng: 8.018718}, 
  {lat: 58.154776, lng: 8.014151}, 
  {lat: 58.155140, lng: 8.017743}, 
  {lat: 58.155887, lng: 8.007238}, 
  {lat: 58.155078, lng: 8.011741}, 
  {lat: 58.151853, lng: 8.019184}];

const db = require(appRoot + '/bin/queries');

const app = express();
const port = process.env.PORT || 8080;

app.set('port', (port));

app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.json());

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/spotshit/dummy', (req, res) => {
  res.send('hello dummy');
});

app.get('/spotshit/query', db.returnQuery);
app.get('/spotshit/statement', db.returnFromStatement);

app.post('/spotshit/upload', uploadImage, db.newSpot);

app.listen(app.get('port'), function() {
	console.log("shitserver started");
});

function randomName() {
	let d = Date.now().toString() + '_';
	let name = d + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
	return name;
}

function uploadImage(req, res, next) {
  if (!req.files) {
    res.status(400).send('No files were uploaded.');
  }
 
  let sampleFile = req.files.file;
  let d = Date.now();
  let ranName = randomName() + '.jpeg';
  let ranGeo = dummGeo[Math.round((Math.random() * (dummGeo.length - 1)))];

  sampleFile.mv('public/images/' + ranName, function(err) {
    if (err) { 
      console.log(err);
      res.status(500).send('there was a problem uploading your shit');
    } else {
      req.loc = JSON.stringify(ranGeo);
      req.src = ranName;
      next();
    }
  });
}