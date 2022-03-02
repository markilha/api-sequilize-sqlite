const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Usuario extends Model {}

Usuario.init({
    nome: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    senha:{
        type:DataTypes.STRING
    },
    avatarUrl:{
        type: DataTypes.STRING
    }

},{
    sequelize,
    modelName: 'usuario',
    timestamps:false
});

module.exports = Usuario;