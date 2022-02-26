const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Categoria extends Model {}

Categoria.init({
    nome: {
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    }  

},{
    sequelize,
    modelName: 'categoria',
    timestamps:false
});

module.exports = Categoria;