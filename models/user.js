const DataTypes = require('sequelize');
const db = require('../db/conecttion')
const Character = require('./character');
const { Model, Sequelize } = require('sequelize')
class User extends Model { }

User.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },

    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize: db,
    modelName: "users"
})


module.exports = User;