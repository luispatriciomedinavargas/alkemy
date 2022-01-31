const { check } = require("express-validator");
const Router = require('express');
const {
    GetMovie,
    GetByIdMovie,
    PostMovie,
    PutMovie,
    DeleteMovie, } = require('../controller/movie');
const checkInput = require('../middleware/check-Inputs');
const checkJWT = require('../middleware/check-JWT');
const { checkIdMovie, checkIdCharacter } = require('../helpers/checkDB');

const router = Router();

router.get('/', [

    checkInput
],
    GetMovie)
router.get('/:id', [
    checkInput,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id is a int').isInt(),
    check('id').custom(checkIdMovie)
],
    GetByIdMovie)
router.post('/', [
    checkJWT,
    check('id_character', 'the id_character is a int').isInt(),
    check('id_character').custom(checkIdCharacter),
    check('title', 'the title can not be empty').notEmpty(),
    check('title', 'the title is a string').isString(),
    check('created', 'the title is a string').notEmpty(),
    check('created', 'the created does not have the correy form').isDate('DD/MM/YYYY'),
    checkInput
],
    PostMovie)
router.put('/:id', [
    checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id is a int').isInt(),
    check('id_character', 'the id_character is a int').isInt(),
    check('id_character').custom(checkIdCharacter),
    check('id').custom(checkIdMovie),
    check('title', 'the title can not be empty').notEmpty(),
    check('title', 'the title is a string').isString(),
    check('created', 'the title is a string').notEmpty(),
    check('created', 'the created does not have the correy form').isDate('DD/MM/YYYY'),
    checkInput
],
    PutMovie)
router.delete('/:id', [
    // checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id is a int').isInt(),
    check('deleted', 'deleted is a boolean').isBoolean(),
    check('deleted', 'deleted is a boolean').isBoolean(),
    checkInput
],
    DeleteMovie)


module.exports = router