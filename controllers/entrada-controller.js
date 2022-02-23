const express = require("express");
const sequelize = require("../database");
const Entrada = require("../views/Entrada");

exports.getEntradas = async (req, res, next) => {
  const entradas = await Entrada.findAll();
  res.send(entradas);
};
exports.getEntradaId = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.findOne({ where: { id: requestId } });
  res.send(entradas);
};
exports.postEntrada = async (req, res, next) => {
  await Entrada.create(req.body);
  res.send("Entrada inserida com sucessso!");
};
exports.putEntrada = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.findOne({ where: { id: requestId } });

  Entrada.data = req.body.data;
  Entrada.categoria = req.body.categoria;
  Entrada.tipo = req.body.tipo;
  Entrada.valor = req.body.valor;
  Entrada.descricao = req.body.descricao;
  await Entrada.save();
  res.send(entradas);
};
exports.delEnt = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.destroy({ where: { id: requestId } });
  res.send("Usuário removido com sucesso");
};
