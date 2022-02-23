const express = require("express");
const sequelize = require("../database");
const User = require("../views/User");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};
exports.getUsersId = async (req, res, next) => {
  const requestId = req.params.id;
  const users = await User.findOne({ where: { id: requestId } });
  res.send(users);
};
exports.postUsers = async (req, res, next) => {
  await User.create(req.body);
  res.send("Usuário inserido com sucessso!");
};
exports.puttUsers = async (req, res, next) => {
  const requestId = req.params.id;
  const users = await User.findOne({ where: { id: requestId } });
  users.username = req.body.username;
  await users.save();
  res.send(users);
};
exports.delUsers = async (req, res, next) => {
  const requestId = req.params.id;
  const users = await User.destroy({ where: { id: requestId } });
  res.send("Usuário removido com sucesso");
};
