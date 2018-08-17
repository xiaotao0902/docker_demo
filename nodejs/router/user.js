
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const User = require("../models/userSchema");

// 查询所有user信息路由
router.get("/user", (req, res) => {
  User.find({})
    .sort({ update_at: -1 })
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});

// 通过ObjectId查询单个user信息路由
router.get("/user/:name", (req, res) => {
  User.find({"name":req.params.name})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

// 添加一个user信息路由
router.post("/user", (req, res) => {
  //使用user model上的create方法储存数据
  User.create(req.body, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
});

//更新一条user信息数据路由
router.put("/user/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        tel: req.body.tel,
        address: req.body.address
      }
    },
    {
      new: true
    }
  )
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// 添加图片路由
router.put("/user/addpic/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        imgArr: req.body.url
      }
    },
    {
      new: true
    }
  )
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

//删除一条user信息路由
router.delete("/user/:id", (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  })
    .then(user => res.json(`success`))
    .catch(err => res.json(err));
});

module.exports = router;
