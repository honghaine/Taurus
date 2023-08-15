const express = require("express");
const router = express.Router();
const User = require('../model/User');
const Login = require("../model/Login");
const UserDetail = require('../model/UserDetail');
const Posts = require("../model/Posts");

router.get("/home", async (req, res) => {
  res.render("home_page");
});

router.get("/onlylooker", async (req, res) => {
  const users = await User.findAll();
  res.render("our_team", {contents: users});
});

router.get("/detail", async (req, res) => {
  const users = await UserDetail.findAll();
  res.render("our_team", {contents: users});
});

router.post("/signin", async(req, res) => {
  const data = req.body;
  let getDatabase;

  try {
    getDatabase = await UserDetail.findOne({ where: { username: data.username } });
  } catch (error) {
    return res.status(403).send('Wrong Username');
  }

  if (getDatabase.passwords == data.password) {
    return res.render("blog");
  } else {
    return res.status(403).send('Wrong Password');
  }

}); 

router.get("/blog", async (req, res) => {
  return res.render("blog");
});

router.post("/blog", async (req, res) => {
  const data = req.body ;

  console.log(data.user_id);
  const a = await Posts.create({
    post_id: 123,
    text: data.text,
    userId: data.user_id,
    created_at: new Date(),
  });
  await a.save();
  return res.render("blog");
});

module.exports = router;
