const db = require('../db/conecttion')
const DataTypes = require('sequelize');
const { Model } = require('sequelize');
const Movie = require('./movie');


class Gender extends Model {

    setImg(char = Gender, newpath) {
        const oldpath = char.split('/')[4];
        console.log('este es el path nuevo' + newpath)
        if (oldpath) {
            fs.unlinkSync(`C:/Users/sasuk/Desktop/UDEMY/Nodejs/alkemy/storage/${oldpath}`)
            return this.savefile = `http://localhost:8080/storage/${newpath}`;
        } else {
            return this.savefile = `http://localhost:8080/storage/${newpath}`;
        }

    }
}

Gender.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    savefile:
    {
        type: DataTypes.STRING,
    },
}, {
    sequelize: db,
    modelName: 'genders'
})

Gender.belongsTo(Movie, { foreignKey: 'id_movie' })
module.exports = Gender;
