const { request } = require("express")
const { Gender, Movie } = require("../models")
const { response } = require("../router/user")

const getAllGende = async (req = request, res = response) => {
    const getAll = await Gender.findAll(
        {
            where: {
                delete: false
            },
            include: [{
                all: true
            }]

        }
    );



    res.status(200).json({
        getAll
    })
}

const genderById = async (req = request, res = response) => {
    const { id } = req.params;

    const getById = await Gender.findOne({
        where: {
            delete: false,
            id: id
        }
    });


    res.status(200).json({
        getById
    })



}
const genderPost = async (req = request, res = response) => {

    const { description } = req.body

    const postGender = await Gender.create({ description });
    res.status(200).json({
        postGender
    })

}
const genderPut = async (req = request, res = response) => {

    const { id } = req.params;

    const { description } = req.body
    const putGender = await Gender.create({ description });
    res.status(200).json({
        putGender
    })
};
const genderDelete =
    async (req = request, res = response) => {
        const { id } = req.params;

        const { deleted } = req.body;
        const putGender = await Gender.findOne({
            where: {
                delete: false,
                id: id
            }
        });
        await putGender.update({ delete: deleted });
        putGender.save();
        res.status(200).json({
            msg: 'successfly'
        })
    }


module.exports = {
    getAllGende,
    genderById,
    genderPost,
    genderPut,
    genderDelete,
}