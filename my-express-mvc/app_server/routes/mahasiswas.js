const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");
// Fungsi dan rute Index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/mahasiswa",mahasiswaController.index);
router.post("/mahasiswa/insert",mahasiswaController.insert);
module.exports = router;

