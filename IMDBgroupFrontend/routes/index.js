var express = require('express');
var router = express.Router();
var cinemaCtrl = require('../controller/cinema.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New note page. */
router.get('/newnote', function(req, res){
  return cinemaCtrl.getNote(req, res);
});

/*POST New Note page. */
router.post('/newnote', function(req, res){
  return cinemaCtrl.create(req, res);
});

module.exports = router;
