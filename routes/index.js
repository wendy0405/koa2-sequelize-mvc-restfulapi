const router = require('koa-router')()
const UserController = require('../controller/UserController');
router.get('/', async (ctx, next) => {
  let Users = new UserController();
  let rst = await Users.test({user_id:ctx.query.user_id});
  rst = rst.get({plain:true});
  ctx.body = rst;
})
module.exports = router
