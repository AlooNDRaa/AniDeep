module.exports = app => {
  const animes = require("../controllers/client.controller.js");

  let router = require("express").Router();

// Create a new Anime

app.use('/api/animes', router);

};