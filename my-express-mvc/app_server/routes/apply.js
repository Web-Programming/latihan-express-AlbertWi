const express = require("express");
const router = express.Router();
const controllerApply = require("../controllers/controllerApply")

router.post('/', controllerApply => {
  console.log('Received data:', req.body); // Log untuk debugging

  // Validasi data
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    return res.status(400).send({ message: 'Invalid input data' });
  }

  // Proses data atau simpan ke database
  // Simulasi respons sukses
  res.status(201).send({ message: 'Registration successful' });
});
module.exports = router;