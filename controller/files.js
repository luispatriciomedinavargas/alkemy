const { response, request } = require("express");
const Character = require("../models/character");



const filePutCharacter = async (req = request, res = response) => {
    const { id } = req.params;
    const fileCharacter = await Character.findByPk(id);
    if (req.file) {
        const { filename } = req.file;
        const { savefile } = fileCharacter.dataValues;
        fileCharacter.setImg(savefile, filename)

        fileCharacter.save();

    }
    res.status(200).json({
        fileCharacter
    })
}
const filePutMovie = (req = request, res = response) => {

}
const filePutGender = (req = request, res = response) => {

}





module.exports = {
    filePutCharacter,
    filePutMovie,
    filePutGender
}