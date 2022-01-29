const Sequelize = require('sequelize');

const db = new Sequelize('alkemy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});


module.exports = db;
