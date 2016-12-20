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
       res.send('/imageCard')
     });
 });
