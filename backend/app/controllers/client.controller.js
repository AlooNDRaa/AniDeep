const Anime = require("../models/client.model.js");

// Create and Save a new Anime
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create an Anime
  const anime = new Anime({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
    view_url: req.body.view_url || ''
  });

  // Save Anime in the database
  Anime.create(anime, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Anime."
      });
    else res.send(data);
  });
};
