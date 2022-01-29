const User = require("../models/user")
const fs = require('fs');
const Character = require("../models/character");
const checkEmail = async (email) => {
    const check = await User.findOne({
        where: {
            email: email
        }
    })
    if (check) {
        throw new Error(`the email: ${email}has ben register `);
    }
}
const checkIdCharacter = async (id) => {
    const check = await Character.findByPk(id)
    if (check) {
        throw new Error(`Dont exist a Character with this id: ${id}`);
    }
}
module.exports =
{
    checkEmail,
    checkIdCharacter
}