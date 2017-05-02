var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/big_data.ejs', function(req, res, next) {
	res.render('big_data', { title: 'Big Data' });
});

router.get('/iot.ejs', function(req, res, next) {
	res.render('iot', { title: 'IOT' });
});

router.get('/blog.ejs', function(req, res, next) {
	res.render('blog', { title: 'Blog' });
});

router.get('/aboutus', function(req, res, next) {
    res.render('profile_page', { title: 'About Us' });
});

router.get('/locations', function(req, res, next) {
  res.render('locations', { title: 'locations' });

});

router.get('/big_data.ejs', function(req, res, next) {
  res.render('big_data', { title: 'Big Data' });
});

module.exports = router;
