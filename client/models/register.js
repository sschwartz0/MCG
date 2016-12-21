angular
  .module('Codesmith.RegisterFactory', ['ngRoute', 'Codesmith.HomeController'])
  .factory('RegisterFactory', RegisterFactory);

function SavedController($scope, $http, HomeController) {
zx
  $scope.register = (req, res, next) => {
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
}
