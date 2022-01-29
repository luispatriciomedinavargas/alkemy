const db = require('../db/conecttion')
const { DataTypes, Model } = require('sequelize');
const fs = require('fs');



class Character extends Model {

    setImg(char = Character, newpath) {
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

Character.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name:
        { type: DataTypes.STRING },
    age:
        { type: DataTypes.STRING },
    high:
        { type: DataTypes.STRING },
    history:
        { type: DataTypes.STRING },
    delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    savefile: { type: DataTypes.STRING },

}, {
    sequelize: db,
    modelName: 'characters',
})

module.exports = Character