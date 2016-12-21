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
          loremIpsum: Sequelize.TEXT
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

const simpleCard = (req, res, next) => {
  var data = req.body;
  var simpleCard = sequelize.define('simpleCards', {
          _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
          username: Sequelize.STRING,
          title: Sequelize.STRING,
          width: Sequelize.STRING,
          titleColor: Sequelize.STRING,
          contentBg: Sequelize.STRING,
          textcolor: Sequelize.STRING,
          footerBg: Sequelize.STRING
    });

    simpleCard.sync({}).then(() => {
    simpleCard.create({
        'username': req.cookies.User,
        'title': data.title,
        'width': data.width,
        'titleColor': data.titleColor,
        'contentBg': data.contentBg,
        'textcolor': data.textcolor,
        'footerBg': data.footerBg
        }).then((simpleCard)=>{
          if(simpleCard) res.send(true);
          else if (!simpleCard) res.send(false);
        });
    });
  }

const register = (req, res, next) => {
  console.log(req)
  var data = req.body;
  var user = sequelize.define('users', {
      _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
      username: Sequelize.STRING,
      password: Sequelize.STRING
  });

  user.sync({}).then(() => {
  user.create({
      'username': data.username,
      'password': data.password
    }).then((user)=>{
      if(user.username && user.password) {res.clearCookie('User'); res.cookie('User', data.username); res.send(true);}
      else if(!user.password || !user.username) {res.send(false)};
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

  user.find({
        where: {'username': data.username},
        attributes: ['username', 'password']
      }).then((user)=>{
        if(user.password === data.password) {res.clearCookie('User'); res.cookie('User', data.username); res.send(true);}
        else if(user.password !== data.password) {res.send(false);}
      });
}


const getImageCards = (req, res, next) => {
  if(!req.cookies.User)  {res.send('You need to login')}
   else {
     console.log(req.cookies.User)
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
            loremIpsum: Sequelize.TEXT
        });

    imageCard.findAll({
        where: {
          username: req.cookies.User
        }
      }).then((imageCard)=>{
          res.end(JSON.stringify(imageCard))
        });
    }
}

const getSimpleCards = (req, res, next) => {
  if(!req.cookies.User)  {res.send('You need to login')}
   else {
     console.log(req.cookies.User)
    var data = req.body;
    var simpleCard = sequelize.define('simpleCards', {
        _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        username: Sequelize.STRING,
        title: Sequelize.STRING,
        width: Sequelize.STRING,
        titleColor: Sequelize.STRING,
        contentBg: Sequelize.STRING,
        textcolor: Sequelize.STRING,
        footerBg: Sequelize.STRING
      });

    simpleCard.findAll({
        where: {
          username: req.cookies.User
        }
      }).then((simpleCard)=>{
          res.end(JSON.stringify(simpleCard))
        });
    }
}

// EXPORTS

module.exports.imageCard = imageCard;
module.exports.simpleCard = simpleCard;
module.exports.register = register;
module.exports.login = login;
module.exports.getImageCards = getImageCards;
module.exports.getSimpleCards = getSimpleCards;
