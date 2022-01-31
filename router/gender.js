const Router = require("express");
const { check } = require("express-validator");
const { getAllGende,
    genderById,
    genderPost,
    genderPut,
    genderDelete, } = require("../controller/gender");
const { checkIdGender } = require("../helpers/checkDB");
const checkInput = require('../middleware/check-Inputs');
const checkJWT = require("../middleware/check-JWT");

const router = Router();




router.get('/', [
    checkInput
],
    getAllGende
)
router.get('/:id', [
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id an int').isInt(),
    check('id').custom(checkIdGender),
    checkInput
],
    genderById
)
router.post('/', [
    checkJWT,
    check('description', 'the description can not be empty').notEmpty(),
    check('description', 'the description is a string').isString(),
    checkInput
],
    genderPost
)
router.put('/:id', [
    checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id most be a int').isInt(),
    checkInput
],
    genderPut
)
router.delete('/:id', [
    checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id most be a int').isInt(),
    checkInput
],
    genderDelete
)
module.exports = router;