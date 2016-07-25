var express = require('express');
var router = express.Router();

// Configurar el plugin Moment
// var moment = require('moment');

// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	var fecha = moment().format();
//   res.render('index', { title: fecha });
// });


/* GET home page. */

var title = "BLU";

router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});




module.exports = router;
