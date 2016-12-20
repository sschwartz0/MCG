var UserMeta = require('./model/user.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:PASSWORD@localhost:5432/mcg');

//POST/GET REQUESTS

const imageCard = (req, res, next) => {
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
        'username': req.cookies.User,
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
          if(imageCard) res.send(true);
          else if (!imageCard) res.send(false);
        });
    });
  }

const register = (req, res, next) => {
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
}

const login = (req, res, next) => {
  var data = req.body;
  var user = sequelize.define('users', {
      _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
      username: Sequelize.STRING,
      password: Sequelize.STRING,
  });

  user.findOne({
        'username': data.username
      }).then((user)=>{
        if(user.password === data.password) {res.cookie('User', user.username); res.send(true);}
        else if(user.username !== data.password) res.send(false);
      });
}


const getComponents = (req, res, next) => {
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

  imageCard.findAll({
      where: {
        username: req.cookies.User
      }
    }).then((imageCard)=>{
        res.end(JSON.stringify(imageCard))
      });
}

// EXPORTS

module.exports.imageCard = imageCard;
module.exports.register = register;
module.exports.login = login;
module.exports.getComponents = getComponents;
