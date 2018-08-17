const express = require('express');
const user = require('./router/user');
const account = require('./router/account');
const mongoose = require("mongoose");

const bodyParser = require("body-parser")

//这一句是连接上数据库
 var db = mongoose.connect('mongodb://mongo:27017/demo');

//这里的myDbs是数据库的名字，不是表的名字

const app = express();
//设置跨域访问
// app.use('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1',user);
app.use('/v1',account);
app.listen(3000,() => {
    console.log('app listening on port 3000.')
});
