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
  res.render('index', { title: title });

});


router.get('/test', function(req, res, next) {
  res.render('test');

});





router.post('/revisarcomprobante', function(req, res, next) {
        console.log("VARIABLES");

        console.log(req.body);



  request
	  .post('http://162.243.30.11:8080/pro/Blu/api/consulta/pago')
	  .type('form')
	  .send(req.body)
	  .set('Accept', 'application/json')
	  .end(function(err, cosulta){
                  if(err){
                          console.log(err);
                          res.send('<p>Error</p>');
                  }
                  console.log(cosulta.body);

                  var datos = cosulta.body;


                  res.render('comprobante', datos);

	    // Calling the end function will send the request
  	});
});




module.exports = router;
