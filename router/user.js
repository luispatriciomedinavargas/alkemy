const Router = require('express');
const { check } = require('express-validator');
const { userLogin, userRegister } = require('../controller/user');
const { checkEmail } = require('../helpers/checkDB');
const checkInput = require('../middleware/check-Inputs');



const router = Router();


router.post('/', [
    check('email', 'please the email can not be empty').notEmpty(),
    check('password', 'please the password can not be empty').notEmpty(),
    check('email', 'the email does not have correct format').isEmail(),

    checkInput
], userLogin)
router.post('/register', [
    check('email', 'please the email can not be empty').notEmpty(),
    check('password', 'please the password can not be empty').notEmpty(),
    check('email', 'the email does not have correct format').isEmail(),
    check('email').custom(checkEmail),
    checkInput
], userRegister)



module.exports = router;