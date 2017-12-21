const User = require('../models/user');
const BaseController = require('./BaseController');
class UserController extends BaseController{
  constructor() {
    super();
  }
  async test(data = {}) {
    let user = new User();
    // let rst = await user.find({'where':{'user_id':1},'attributes':['user_name']});
    let rst = await user.select();
    let arg = [];
    rst.map(res=>{
      arg.push(res.get({plain:true}));
    });
    return this.jsonData(arg);
    // console.log(arg);
    // return rst.get({plain:true});
  }
}
module.exports = UserController;
