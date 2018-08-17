const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
  username :String,
  password : String
}, { collection: 'account'})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据


const Account = module.exports = mongoose.model('account',accountSchema);
