const Anime = require("../models/client.model.js");


exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío."
    });
  }

  const anime = new Anime({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
    view_url: req.body.view_url || ''
  });

  Anime.create(anime, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Se produjo un error al crear el anime."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Anime.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Se produjo un error al recuperar los animes."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Anime.findById(req.params.animeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el anime con el ID ${req.params.animeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error al recuperar el anime con ID " + req.params.animeId
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío."
    });
  }

  Anime.updateById(req.params.animeId, new Anime(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el anime con el ID ${req.params.animeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar el anime con ID " + req.params.animeId
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.delete = (req, res) => {
  Anime.remove(req.params.animeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el anime con el ID ${req.params.animeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error al eliminar el anime con ID " + req.params.animeId
        });
      }
    } else {
      res.send({ message: "El anime se eliminó con éxito." });
    }
  });
};
