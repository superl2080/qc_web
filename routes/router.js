var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'index.html'));
});

router.get('/index.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'index.html'));
});

router.get('/about_us.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'about_us.html'));
});

router.get('/prolist.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'prolist.html'));
});

router.get('/profit.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'profit.html'));
});

router.get('/pro_m1.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'pro_m1.html'));
});

router.get('/pro_m2.html', function(req, res, next) {
  console.log('Router get: ' + '/');
  res.sendFile(path.join(__dirname, '../public/html', 'pro_m2.html'));
});

module.exports = router;
