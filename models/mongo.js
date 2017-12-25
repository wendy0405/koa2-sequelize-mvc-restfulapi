//mongodb
const conf = require('../conf/conf');
var mongoose = require('mongoose');
mongoose.createConnection(conf.mongodb_host,conf.mongodb_name);
var Schema = mongoose.Schema;
var arg = {
    user_name:String,
    user_pwd:String
};
var UserSchema =  new Schema(arg);
module.exports = mongoose.model('User', UserSchema);
