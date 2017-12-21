const router = require('koa-router')()
const UserController = require('../controller/UserController');
const User = new UserController();
router.get('/', async (ctx, next) => {
  let rst = await User.test({user_id:ctx.query.user_id});
  ctx.body = rst;
})
module.exports = router
