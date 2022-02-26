const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Entrada extends Model {}

Entrada.init({
    data: {
        type: DataTypes.DATEONLY
    },
    categoria:{
        type: DataTypes.STRING
    },
    tipo:{
        type:DataTypes.STRING
    },
    valor:{
        type: DataTypes.DOUBLE
    },
    descricao:{
        type: DataTypes.STRING
    },
    estatus:{
        type: DataTypes.STRING
    }

},{
    sequelize,
    modelName: 'entrada',
    timestamps:false
});

module.exports = Entrada;