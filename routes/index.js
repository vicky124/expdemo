var express = require('express');
var router = express.Router();
module.imports = app;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/', function (req, res) {
  res.send('hello world')
})

module.exports = router;
