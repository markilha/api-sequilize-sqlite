const {Sequelize}= require('sequelize');

const sequelize = new Sequelize('test-d','user','pass',{
    dialect: 'sqlite',
    host: './entrada.sqlite'
});

module.exports = sequelize;