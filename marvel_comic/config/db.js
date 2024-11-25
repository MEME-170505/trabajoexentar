const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('marvel_comic', 'root', 'fernanfloo.18', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

module.exports = sequelize;
