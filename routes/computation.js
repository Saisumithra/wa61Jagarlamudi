var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
let someNumber=(Math.random()*100)
res.render('sh', { result:'ceil applied to '+someNumber+' is '+Math.ceil(someNumber)});
});
module.exports = router;