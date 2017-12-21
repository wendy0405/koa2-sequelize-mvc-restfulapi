class BaseController {
  jsonData(data) {
    //统一处理
    if(typeof data === 'object') {
      return {'code':2000,'msg':'操作成功','data':data};
    }
  }
}
module.exports = BaseController;
