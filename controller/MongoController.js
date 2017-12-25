//mongodb
var User = require('../models/mongo');
class MongoController {
  create(data) {
    User.create({user_name: 'adsf', user_pwd: '12312312313'},function(err,res) {
        console.log('成功');
    });
  }
  find(data) {
    User.find(function(err,res) {
        console.log(res);
    })
  }
}
module.exports = MongoController;
