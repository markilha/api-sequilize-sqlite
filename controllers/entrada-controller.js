const express = require("express");
const sequelize = require("../database");
const Entrada = require("../views/Entrada");

exports.getEntradas = async (req, res, next) => {
  const entradas = await Entrada.findAll();
  res.send(entradas);
};
exports.getEntradaId = async (req, res, next) => {
  const requestId = req.params.id;
  if(requestId === "sumdes"){
    const entradas = await Entrada.findAll({
      where: { tipo: 'Despesa' } ,
      attributes: [
        "mes","tipo",
        [sequelize.fn("sum", sequelize.col("valor")), "soma"],
      ],
      group: "mes",
      order: [['data', 'ASC']]
    });
    res.send(entradas)
  }else if(requestId === "sumrec"){
    const entradas = await Entrada.findAll({
      where: { tipo: 'Receita' } ,
      attributes: [
        "mes","tipo",
        [sequelize.fn("sum", sequelize.col("valor")), "soma"],
      ],
      group: "mes",
      order: [['data', 'ASC']]
    });
    res.send(entradas)
  } else{
  const entradas = await Entrada.findOne({ where: { id: requestId } });
  res.send(entradas);
  }  
};
exports.postEntrada = async (req, res, next) => {
  await Entrada.create(req.body);
  console.log(req.body)
  res.send("Entrada inserida com sucessso!");
};
exports.putEntrada = async (req, res, next) => {
  const requestId = req.params.id;
  const entrada = await Entrada.findOne({ where: { id: requestId } });

  entrada.data = req.body.data;
  entrada.categoria = req.body.categoria;
  entrada.tipo = req.body.tipo;
  entrada.valor = req.body.valor;
  entrada.descricao = req.body.descricao;
  entrada.estatus = req.body.estatus;
  await entrada.save();
  res.send(entrada);
};
exports.delEnt = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.destroy({ where: { id: requestId } });
  res.send("Entrada removida com sucesso");
};
exports.FindGroupCategory = async(req,res,next)=>{
  const entradas = await Entrada.findAll({
    attributes: [
      "categoria",
      [sequelize.fn("COUNT", sequelize.col("id")), "count"],
    ],
    group: "categoria",
  });
  res.send(entradas)
 }
