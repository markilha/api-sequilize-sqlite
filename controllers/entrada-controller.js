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
  const entrada = await Entrada.findOne({ where: { id: requestId } });

  entrada.data = req.body.data;
  entrada.categoria = req.body.categoria;
  entrada.tipo = req.body.tipo;
  entrada.valor = req.body.valor;
  entrada.descricao = req.body.descricao;
  await entrada.save();
  res.send(entrada);
};
exports.delEnt = async (req, res, next) => {
  const requestId = req.params.id;
  const entradas = await Entrada.destroy({ where: { id: requestId } });
  res.send("Usuário removido com sucesso");
};
