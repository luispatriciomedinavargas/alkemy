const { request, response } = require('express');
const db = require('../db/conecttion');
const Character = require('../models/character');
const upload = require('../middleware/upload');


const characterGetAll = async (req = request, res = response) => {
    const allCharacter = await Character.findAll({
        where: { delete: false },
        include: [{
            all: true
        }]

    });
    res.status(200).json({
        allCharacter
    })
};
const characterGetId = async (req = request, res = response) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'ok',
        id
    })
};
const characterGetName = async (req = request, res = response) => {
    const { name } = req.query;
    const characterByName = await Character.findAll({
        where: {
            name: name,
        }
    })
    console.log(characterByName)
    if (!characterByName) return res.status(500).json({
        msg: 'something was mal please call the admin'
    })
    res.status(200).json({
        characterByName
    })
};
const characterGetAge = async (req = request, res = response) => {
    const { age } = req.query;
    const characterByAge = await Character.findAll({
        where: {
            age: age,
        }
    })

    if (!characterByAge) return res.status(500).json({
        msg: 'something was mal please call the admin'
    })
    res.status(200).json({
        characterByAge
    })
};
const characterPost = async (req = request, res = response) => {
    const {
        name,
        age,
        high,
        history
    } = req.body;
    data = {
        name,
        age,
        high,
        history
    }
    const postCharacter = await Character.create(data);

    res.status(200).json({
        msg: 'sucessfully',
        postCharacter
    })
};
const characterPut = async (req = request, res = response) => {
    const { id } = req.params;
    const {
        name,
        age,
        high,
        history
    } = req.body;
    const data = {
        name,
        age,
        high,
        history
    }
    const putCharacter = await Character.findByPk(id);
    await putCharacter.update(data);
    res.status(200).json({
        putCharacter
    })
}
const characterDelete = async (req = request, res = response) => {
    const { id } = req.params;
    const { deleted } = req.body;
    if (!deleted) return res.status(400).json({ msg: 'the porperty must be true' })
    const putCharacter = await Character.findByPk(id);
    await putCharacter.update({ delete: deleted })
    res.status(200).json({
        msg: 'successfully',
    })
};
module.exports = {
    characterGetId,
    characterGetAll,
    characterPut,
    characterDelete,
    characterPost,
    characterGetName,
    characterGetAge

}
