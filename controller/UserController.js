const User = require('../models/user');
const BaseController = require('./BaseController');
class UserController extends BaseController{
  constructor() {
    super();
  }
  async test(ctx) {
    let user = new User();
    let rst = await user.select();
    let arg = [];
    rst.map(res=>{
      arg.push(res.get({plain:true}));
    });
    return this.jsonData(ctx,arg);
  }
}
module.exports = UserController;
