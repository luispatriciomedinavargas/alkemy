const User = require("../models/user")
const fs = require('fs');
const Character = require("../models/character");
const { Gender, Movie } = require("../models");
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
    if (!check) {
        throw new Error(`Dont exist a Character with this id: ${id}`);
    }
}
const checkIdGender = async (id) => {
    const check = await Gender.findByPk(id)
    if (!check) {
        throw new Error(`Dont exist a Gender with this id: ${id}`);
    }
}

const checkIdMovie = async (id) => {
    const check = await Movie.findByPk(id)
    if (!check) {
        throw new Error(`Dont exist a Movie with this id: ${id}`);
    }
}
module.exports =
{
    checkEmail,
    checkIdCharacter,
    checkIdGender,
    checkIdMovie,
}