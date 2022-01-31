const express = require('express')
const db = require('../db/conecttion')
const cors = require('cors');
const { movies, genders, characters, users } = require('../seeds/index');
const { Movie,
    Gender,
    User,
    Character
} = require('./index');
class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
        this.apiPaths = {
            auth: '/api/auth',
            character: '/api/character',
            gender: '/api/gender',
            movie: '/api/movie',
            file: '/api/file',
        };
        this.dbconnect();
        this.middlewares();
        this.entities();
        this.seeds();
        this.router();
    }
    router() {
        this.app.use(this.apiPaths.auth, require('../router/user'))
        this.app.use(this.apiPaths.character, require('../router/character'))
        this.app.use(this.apiPaths.gender, require('../router/gender'))
        this.app.use(this.apiPaths.file, require('../router/file'))
        this.app.use(this.apiPaths.movie, require('../router/movie'))
    }
    entities() {
        Character.sync();
        Movie.sync();
        Gender.sync();
        User.sync();
    }
    async dbconnect() {
        try {
            await db.authenticate();

        } catch (error) {
            throw new Error(error);
        }

    }
    async seeds() {
        for (const character of characters) {
            const id = await Character.findByPk(character.id);
            if (!id) {

                await Character.create(character)
            }
        }
        for (const movie of movies) {
            const id = await Movie.findByPk(movie.id);
            if (!id) {

                await Movie.create(movie)
            }
        }

        for (const user of users) {
            const id = await User.findByPk(user.id);
            if (!id) {

                await User.create(user)
            }
        }
        for (const gender of genders) {
            const id = await Gender.findByPk(gender.id);
            if (!id) {

                await Gender.create(gender)
            }
        }


    }
    middlewares() {
        //CORS
        this.app.use(cors());


        //lectura BODY
        this.app.use(express.json());

        this.app.use('/public', express.static(`${__dirname}/storage`))
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`server works at port ${this.port}`);
        })
    }
}

module.exports = Server;