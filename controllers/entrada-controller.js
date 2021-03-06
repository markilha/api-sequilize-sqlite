const express = require("express");
const sequelize = require("../database");
const Entrada = require("../views/Entrada");

exports.getEntradas = async (req, res, next) => {
  const entradas = await Entrada.findAll({ where: { usuario: req.params.id } });
  res.send(entradas);
};
exports.getEntradaId = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.findOne({ where: { id: requestId } });
  res.send(entradas);
};
exports.getEntradaSumdes = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.findAll({
    where: { tipo: "Despesa", usuario: req.params.id },
    attributes: [
      "mes",
      "tipo",
      [sequelize.fn("sum", sequelize.col("valor")), "soma"],
    ],
    group: "mes",
    order: [["data", "ASC"]],
  });
  res.send(entradas);
};
exports.getEntradaSumRec = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.findAll({
    where: { tipo: "Receita", usuario: req.params.id },
    attributes: [
      "mes",
      "tipo",
      [sequelize.fn("sum", sequelize.col("valor")), "soma"],
    ],
    group: "mes",
    order: [["data", "ASC"]],
  });
  res.send(entradas);
};
exports.postEntrada = async (req, res, next) => {
  console.log(`DADOS: ${req.body}`);
  await Entrada.create(req.body);
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
  entrada.usuario = req.body.usuario;
  await entrada.save();
  res.send(entrada);
};
exports.delEnt = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.destroy({ where: { id: requestId } });
  res.send("Entrada removida com sucesso");
};
exports.getContCat = async (req, res, next) => {  
  const entradas = await Entrada.findAll({
    where: { tipo: "Despesa", usuario: req.params.id },
    attributes: [
      "data","categoria",
      [sequelize.fn("sum", sequelize.col("valor")), "soma"],
    ],
    group: "categoria",
    order: [["categoria", "ASC"]],
  });
  res.send(entradas);
  console.log(entradas)
};
