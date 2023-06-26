const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home_page');
});

router.get('/ourteam', (req, res) => {
    res.render('our_team');
});

module.exports = router;


