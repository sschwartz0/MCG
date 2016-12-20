//REQUIREMENTS

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express()
const router = express.Router();
const pg = require('pg');
const path = require('path');
const session = require('express-session');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:PASSWORD@localhost:5432/mcg');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Models = require('./client/models/models.js');

//EXPRESS USES
app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))
app.use(router);
app.use(jsonParser)
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));

//HTTP REQUEST ROUTES/ACTIONS
app.post('/postImageCard', function(req, res, next){
  Models.imageCard(req, res, next);
});

app.post('/register', function(req, res, next){
  Models.register(req, res, next);
});

app.post('/login', function(req, res, next){
    Models.login(req, res, next);
});

app.get('/getComponents', function(req, res, next){
    Models.getComponents(req, res, next);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
