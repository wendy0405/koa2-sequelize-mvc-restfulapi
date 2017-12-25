class BaseController {
  jsonData(ctx,data) {
    let method = ctx.method;
    //get请求
    if(method === 'GET') {
      //为空或者不存在
      if(data === undefined) {
          return {'code':4000,'msg':'获取失败'};
      }else {
          return {'code':2000,'msg':'获取成功','data':data};
      }
    }else {
      //成功的时候
      if(typeof data === 'boolean') {
        return {'code':2000,'msg':'操作成功'};
      }
      else if(data.msg !== undefined) {
        return {'code':4000,'msg':data.msg};
      }
      else {
        return {'code':4000,'msg':'操作失败'};
      }
    }
  }
}
module.exports = BaseController;
