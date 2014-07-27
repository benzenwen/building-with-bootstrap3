var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Best Product Ever' });
});

/* GET index page. */
router.get('/index.html', function(req, res) {
  res.render('index', { title: 'Best Product Ever' });
});

/* GET proudcts page. */
router.get('/products.html', function(req, res) {
  res.render('products', { title: 'Best Product Ever' });
});

/* GET detail page. */
router.get('/detail.html', function(req, res) {
  res.render('detail', { title: 'Best Product Ever' });
});

module.exports = router;
