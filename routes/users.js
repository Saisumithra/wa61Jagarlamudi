var express = require('express');
var router = express.Router();
var hs = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  hs= hs+1;
  res.send('User accesses are:' +hs);
});

module.exports = router;
