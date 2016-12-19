const express = require('express');
const app = express()
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:PASSWORD@localhost:5432/mcg');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));

app.post('/imageCard', function(req, res, next){
   var cope = req.body;
   var query = connection.query('insert into cope set ?', cope, function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
	});
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});