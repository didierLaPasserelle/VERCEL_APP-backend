var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
 let date = new Date();
 date = date.getFullYear()
 res.json({ year: date });
});

module.exports = router;
