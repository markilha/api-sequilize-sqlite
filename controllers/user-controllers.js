const express = require("express");
const sequelize = require("../database");
const Usuario = require("../views/Usuario");

exports.getUsers = async (req, res, next) => {
  const usuarios = await Usuario.findAll();
  res.send(usuarios);
};
exports.getUsersEmail = async (req, res, next) => { 
  const usuarios = await Usuario.findOne({ where: { email: req.params.email } });
  res.send(usuarios);
};
exports.postUsers = async (req, res, next) => {
  await Usuario.create(req.body);
  res.send("Usuário inserido com sucessso!");
};
exports.puttUsers = async (req, res, next) => {
  const requestId = req.params.id;
  const usuarios = await Usuario.findOne({ where: { id: requestId } });
  Usuario.nome = req.body.nome;
  await Usuario.save();
  res.send(usuarios);
};
exports.delUsers = async (req, res, next) => {
  const requestId = req.params.id;
  const usuarios = await Usuario.destroy({ where: { id: requestId } });
  res.send("Usuário removido com sucesso");
};
