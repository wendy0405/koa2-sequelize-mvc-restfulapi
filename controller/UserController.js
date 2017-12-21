const User = require('../models/user');
class UserController {
  async test(data = {}) {
    let user = new User();
    let rst = await user.find({'where':{'user_id':1},'attributes':['user_name']});
    return rst.get({plain:true});
  }
}
module.exports = UserController;
