module.exports = app => {
  const animes = require("../controllers/client.controller.js");

  let router = require("express").Router();

  router.post("/", animes.create);

  router.get("/", animes.findAll);

  router.get("/:animeId", animes.findOne);

  router.put("/:animeId", animes.update);

  router.delete("/:animeId", animes.delete);

  app.use('/api/animes', router);
};
