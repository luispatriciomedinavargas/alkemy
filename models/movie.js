const db = require('../db/conecttion')
const { DataTypes, Model } = require('sequelize');
const Character = require('./character');

class Movie extends Model {
    setImg(char = Movie, newpath) {
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

Movie.init({

    id:
    {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    title:

    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    savefile:
    {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    created:

    {
        type: DataTypes.DATE,
        allowNull: false,
        // defaultValue: new Date()
    },
    deleted:
    {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    qualification:
    {
        type: DataTypes.STRING,
    },
    id_character: {
        type: DataTypes.BIGINT.UNSIGNED,
    }
}, {
    sequelize: db,
    modelName: 'movies',
})
Movie.belongsTo(Character, { foreignKey: 'id_character' })


module.exports = Movie