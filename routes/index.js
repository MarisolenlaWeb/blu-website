var express = require('express');
var router = express.Router();
var request = require('superagent');

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
  // res.render('index', { title: title });

  request
	  .post('http://162.243.30.11:8080/pro/Blu/api/consulta/pago')
	  .type('form')
	  .send({ 'fecha: ' + request.params.fecha, 'autorizacion: ' + request.params.autorizacion })
	  .set('Accept', 'application/json')
	  .end(function(err, res){
	  	console.log(err);
	  	console.log(res.body);
	    // Calling the end function will send the request
  	});
});


module.exports = router;
