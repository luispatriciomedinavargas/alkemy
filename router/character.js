const Router = require("express");
const { check } = require("express-validator");
const { characterGetAll, characterGetId, characterPost, characterPut, characterDelete } = require("../controller/character");
const { checkIdCharacter } = require("../helpers/checkDB");
const checkInput = require('../middleware/check-Inputs')
const checkJWT = require('../middleware/check-JWT');
const router = Router();




router.get('/', [

    checkInput
],
    characterGetAll
)
router.get('/:id', [
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id most be a int').isInt(),
    check('id').custom(checkIdCharacter),
    checkInput
],
    characterGetId
)
router.post('/', [
    checkJWT,
    check('name', 'name can not be empty').notEmpty(),
    check('name', 'the name most be a string').isString(),
    check('age', 'the age most be a string').isString(),
    check('ahe', 'the high most be a string').isString(),
    check('history', 'the history most be a string').isString(),
    checkInput
],
    characterPost
)
router.put('/:id', [
    checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id most be a int').isInt(),
    check('id').custom(checkIdCharacter),
    check('name', 'name can not be empty').notEmpty(),
    check('name', 'the name most be a string').isString(),
    check('age', 'the age most be a string').isString(),
    check('ahe', 'the high most be a string').isString(),
    check('history', 'the history most be a string').isString(),
    checkInput,

],
    characterPut
)
router.delete('/:id', [
    checkJWT,
    check('id', 'the id can not be empty').notEmpty(),
    check('id', 'the id most be a int').isInt(),
    check('id').custom(checkIdCharacter),
    checkInput,
],
    characterDelete
)

module.exports = router;