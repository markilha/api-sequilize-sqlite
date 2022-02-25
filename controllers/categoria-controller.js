const express = require("express");
const sequelize = require("../database");
const Categoria = require("../views/Categoria");

exports.getCategorias = async (req, res, next) => {
  const Categorias = await Categoria.findAll();
  res.send(Categorias);
};
exports.getCategoriaId = async (req, res, next) => {
  const requestId = req.params.id;
  const Categorias = await Categoria.findOne({ where: { id: requestId } });
  res.send(Categorias);
};
exports.postCategoria = async (req, res, next) => {
  await Categoria.create(req.body);
  res.send("Categoria inserida com sucessso!");
};
exports.putCategoria = async (req, res, next) => {
  const requestId = req.params.id;
  const Categoria = await Categoria.findOne({ where: { id: requestId } });

  Categoria.nome = req.body.nome;
  Categoria.tipo = req.body.tipo;
  
  await Categoria.save();
  res.send(Categoria);
};
exports.delEnt = async (req, res, next) => {
  const requestId = req.params.id;
  const Categorias = await Categoria.destroy({ where: { id: requestId } });
  res.send("Categoria removida com sucesso");
};
