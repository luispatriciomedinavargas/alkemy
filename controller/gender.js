const { request } = require("express")
const { Gender, Movie } = require("../models")
const { response } = require("../router/user")

const getAllGende = async (req = request, res = response) => {
    const getAll = await Gender.findAll(
        {
            include: [{
                all: true
            }]

        }
    );



    res.status(200).json({
        getAll
    })
}


module.exports = { getAllGende }