var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});


router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' :'Wisata Pulau Kemaro','Harga' : 500000},
    {'nama' :'Wisata Punti Kayu','Harga' : 250000},
    {'nama' :'Wisata Jakabaring','Harga' : 100000},
  ]
  res.render('paketwisata', { 
    title: 'Paket Wisata' ,
    listpaketwisata: listpaketwisata});
});

router.post('/orderpaket', function(req, res, next) {
  res.render('orederpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  res.render('orederdetail', { title: 'Detail Pemesanan Paket' });
});


module.exports = router;
