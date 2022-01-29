const Router = require("express");
const { check } = require("express-validator");
const { getAllGende } = require("../controller/gender");
const checkInput = require('../middleware/check-Inputs')

const router = Router();




router.get('/', [
    checkInput
],
    getAllGende
)
module.exports = router;