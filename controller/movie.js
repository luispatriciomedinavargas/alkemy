const { request, response } = require('express');
const { Movie } = require('../models');
const { sequelize } = require('../models/character');


const GetMovie = async (req = request, res = response) => {

    const getAllMovie = await Movie.findAll({
        where: {
            deleted: false
        }
    })
    res.status(200).json({
        getAllMovie
    })

}
const GetByIdMovie = async (req = request, res = response) => {
    const { id } = req.params;
    let movieByID = {}

    const movie = await Movie.findOne({
        where: {
            deleted: false,
            id: id
        }
    })
    movieByID.title = movie.dataValues.title;
    movieByID.cerated = movie.dataValues.created;
    movieByID.savefile = movie.dataValues.savefile;

    res.status(200).json({
        movieByID
    })
}
const GetByNameMovie = async (req = request, res = response) => {
    const { title } = req.query;
    const movie = await Movie.findAll({
        where: {
            deleted: false,
            title: title
        }
    })
    res.status(200).json({
        movie
    })
}
const GetByOrderMovie = async (req = request, res = response) => {
    const { id_character } = req.query;
    const movie = await Movie.findAll({
        order: [['id', 'desc']]
    })
    res.status(200).json({
        msg: 'ok',
        movie
    })
}
const GetByCharacterMovie = async (req = request, res = response) => {
    const { id_character } = req.query;
    const movie = await Movie.findAll({
        where: {
            deleted: false,
            id_character: id_character
        },
        include: {
            all: true
        }
    })
    res.status(200).json({
        movie
    })
}
const PostMovie = async (req = request, res = response) => {
    const { title,
        created } = req.body;
    const data = { title, created }
    console.log(created)
    const movie = await Movie.create(data)

    res.status(200).json({
        movie
    })
}

const PutMovie = async (req = request, res = response) => {
    const { id } = req.params;
    const { title,
        created } = req.body;
    const data = { title, created }
    const movie = await Movie.findByPk(id);
    movie.update(data)

    res.status(200).json({
        movie
    })

}
const DeleteMovie = async (req = request, res = response) => {
    const { id } = req.params;
    const { deleted } = req.body;
    const data = { deleted };
    const movie = await Movie.findOne({
        where: {
            id: id,
            deleted: false
        }
    });
    if (!movie) {
        return res.status(500).json({
            msg: "something was wrong,please call the admin"
        })
    }
    movie.update(data);

    res.status(200).json({
        msg: 'sucessfly deleted'
    })

}



module.exports = {
    GetMovie,
    GetByIdMovie,
    PostMovie,
    PutMovie,
    DeleteMovie,
    GetByNameMovie,
    GetByOrderMovie,
    GetByCharacterMovie
}