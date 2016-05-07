var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/calculadora_iva',function(req, res, next) {
	res.render('calculadora_iva');
})

router.get('/lista_de_compras',function(req, res, next) {
	res.render('lista_de_compras');
})

router.get('/piedra_papel_tijera',function(req, res, next) {
	res.render('piedra_papel_tijera');
})

module.exports = router;
