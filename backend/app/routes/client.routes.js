module.exports = app => {
  const animes = require("../controllers/client.controller.js");

  let router = require("express").Router();

app.use('/api/animes', router);

};