const express = require("express");
const router = express.Router();
const User = require('../model/User');
const Login = require("../model/Login");

router.get("/home", async (req, res) => {
  res.render("home_page");
});

router.get("/onlylooker", async (req, res) => {
  const users = await User.findAll();
  res.render("our_team", {contents: users});
});

router.post("/signup", async(req, res) => {
  const signup = await Login.create({username: "Hector", password: "hehehe"})
  return res.redirect("home");
})

router.get("/blog", async (req, res) => {
  return res.render("blog");
});

module.exports = router;
