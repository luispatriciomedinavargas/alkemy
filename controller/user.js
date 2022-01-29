const { request, respopnse } = require('express');
const { generateJWT } = require('../helpers/generar-jwt')
const User = require('../models/user');



const userLogin = async (req = request, res = respopnse) => {
    const { email, password } = req.body;
    const login = await User.findOne({
        where: {
            email: email,
            password: password,
            estado: true
        }
    })
    if (!login) {
        console.log(login)
        res.status(500).json({
            msg: 'something was wrong please call the admin'
        })
        return;
    }

    const { id } = login;

    const token = await generateJWT(id)
    res.status(200).json({
        login,
        token
    })
}
const userRegister = async (req = request, res = respopnse) => {
    const { email, password } = req.body;
    await User.create({ email, password })


    res.status(200).json({
        msg: 'User create successful'
    })
}



module.exports = {
    userLogin,
    userRegister
}




