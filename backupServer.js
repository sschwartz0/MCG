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

  app.use(cookieParser())
  app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))
  app.use(router);
  app.use(jsonParser)
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(express.static(path.join(__dirname, './node_modules/')));
  app.use(express.static(path.join(__dirname, './client/')));


app.post('/postImageCard', function(req, res, next){
   var data = req.body;
   var imageCard = sequelize.define('imageCards', {
            _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
            username: Sequelize.STRING,
            title: Sequelize.STRING,
            titleImage: Sequelize.STRING,
            width: Sequelize.STRING,
            height: Sequelize.STRING,
            contentBg: Sequelize.STRING,
            footerBg: Sequelize.STRING,
            textcolor: Sequelize.STRING,
            footertextcolor: Sequelize.STRING,
            titletextcolor: Sequelize.STRING,
        });

        imageCard.sync({}).then(() => {
        imageCard.create({
            'username': 'username',
            'title': data.title,
            'titleImage': data.titleImage,
            'width': data.width,
            'height': data.height,
            'contentBg': data.contentBg,
            'footerBg': data.footerBg,
            'textcolor': data.textcolor,
            'footertextcolor': data.footertextcolor,
            'titletextcolor': data.titletextcolor
            }).then((imageCard)=>{
            console.log(imageCard);
            });
        });
});

app.post('/register', function(req, res, next){
    var data = req.body;
    var user = sequelize.define('users', {
        _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        username: Sequelize.STRING,
        password: Sequelize.STRING,
    });

    user.sync({}).then(() => {
    user.create({
        'username': data.username,
        'password': data.password
      }).then((user)=>{
        if(user.username && user.password) res.send(true);
        else if(!user.password || !user.username) res.send(false);
        });
    });

});

app.post('/login', function(req, res, next){
    var data = req.body;
    var user = sequelize.define('users', {
        _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        username: Sequelize.STRING,
        password: Sequelize.STRING,
    });

    user.findOne({
        'username': data.username
      }).then((user)=>{
        if(user.username === data.password) res.send(true);
        else if(user.username !== data.password) res.send(false);
        });


});

// app.post('/login', passport.authenticate('local', function(req, res) {
//     res.redirect('/#/imageCard/');
// }));





app.listen(3000, () => {
  console.log('Listening on port 3000');
});
