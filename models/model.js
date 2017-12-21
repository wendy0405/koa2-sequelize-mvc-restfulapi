/**
 * postgresql 基础模型层
 */
class BaseModel {
    constructor() {
        let Sequelize = require('sequelize');
        this.Sequelize = Sequelize;
        this.sequelize = new Sequelize('postgres://postgres:root@localhost:5432/winzdar',{
            logging: false,
            define:{
                timestamps:false,
                freezeTableName:true
            }
        });
    }
    checkData(data = {}) {
        if(typeof data !== 'object') {
            return {'msg':'please input data'};
        }
        if(typeof data.where !== 'object') {
            return {'msg':'this is invalid data 1'};
        }
        if(typeof data.attributes !== 'object') {
            return {'msg':'this is invalid data 2'};
        }
        return true;
    }
    /**
     * 单条查找方法
     * @param {Object} [data = {}] 传入查询方法
     * @param {Object} [where = {a:b,c:d}] where条件
     * @param {Object} [attributes = ['a','b','c']] 获取字段
     */
    find(data = {}) {
        let ret = this.checkData(data);
        if(typeof ret !== 'boolean') return false;
        return this.model.findOne();
    }
}
module.exports = BaseModel;
