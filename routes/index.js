const router = require('koa-router')()
const UserController = require('../controller/UserController');
const MongoController = require('../controller/MongoController');
const JsonData = require('../jsonData');
const User = new UserController();
const Mongo = new MongoController();
//postgre sql
router.get('/', JsonData, async (ctx, next) => {
  let rst = await User.test(ctx);
  ctx.body = rst;
})
//mongo
router.get('/mongo',async (ctx,netx) => {
  let rst = await Mongo.find();
  ctx.body = 'adfads';
})
module.exports = router
