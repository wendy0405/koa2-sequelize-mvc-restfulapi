const User = require('../models/user');
class UserController {
  test(data = {}) {
    let user = new User();
    return user.find({'where':{'user_id':1},'attributes':['user_name']});
  }
}
module.exports = UserController;
