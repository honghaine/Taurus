const express = require("express");
const router = express.Router();
const User = require('../model/User')

router.get("/home", async (req, res) => {
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users));
  res.render("home_page");
});

router.get("/ourteam", (req, res) => {
  res.render("our_team");
});

module.exports = router;
