
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Account = require("../models/accountSchema");

router.get("/account/:username", (req, res) => {
  Account.find({"username":req.params.username})
    .then(account => {
      res.json(account);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/account", (req, res) => {
  //使用user model上的create方法储存数据
  Account.create(req.body, (err, account) => {
    if (err) {
      res.json(err);
    } else {
      res.json(account);
    }
  });
});

module.exports = router;
