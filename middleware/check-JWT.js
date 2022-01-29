const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const checkJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    const secretkey = process.env.SECRETORPRIVATEKEY || 'Pablit0C14VoUnClavo';

    if (!token) {
        return res.status(401).json({
            msg: 'does not exist token in the request.'
        });
    }

    try {

        const gettingID = jwt.verify(token, secretkey);

        const id = Object.values(gettingID).length - 2;
        const userAuth = await User.findByPk(id);
        const estado = Object.values(userAuth);
        if (!estado[0].estado) {
            return res.status(401).json(
                {
                    msg: 'this user is deleted'
                }
            )
        }

        req.User = userAuth;

        next();
    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'invalid token.'
        })
    }


}
module.exports = checkJWT