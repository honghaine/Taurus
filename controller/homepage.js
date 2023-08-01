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

router.post("/signup", async(req, res) => {
  const signup = await Login.create({username: "Hector", password: "hehehe"})
  return res.redirect("home");
});

router.post("/signin", async(req, res) => {
  const data = req.body;
  console.log(data);
  return res.render("blog");
});

router.get("/hi", (req, res) => {
  return res.render("hi");
})

router.get("/blog", async (req, res) => {
  return res.render("blog");
});

router.post("/blog", async (req, res) => {
  const data = req.body ;

  console.log(data.user_id);
  console.log(data);
  Posts.create({
    data
  })
  return res.render("blog");
});

module.exports = router;
