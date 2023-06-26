const express = require("express");
const router = express.Router();
const User = require('../model/User')

router.get("/home", async (req, res) => {

  res.render("home_page");
});

router.get("/ourteam", async (req, res) => {
  const users = await User.findAll();
  res.render("our_team", {contents: users});
});

module.exports = router;
