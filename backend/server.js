const express = require('express');
const app = express();
const cors = require("cors");

const port = 3000;

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Anime = require('./app/models/client.model'); 

const animes = require('./myapi/animeclass.json');

animes.forEach(element => {
  const animes = new Anime({
    name: element.name,
    description: element.description,
    image_url: element.image_url,
    view_url: element.view_url || ''
  });

  Anime.create(animes, (err, data) => {
    if (err) {
      console.error("Error al crear el anime:", err);
    } else {
      console.log("Anime guardado con éxito:", data);
    }
  });
});


app.get('/myapi/animeclass', (req, res) => {
  res.json(animes);
} )

app.get('/myapi/animeclass/date', (req, res) => {
  res.json({ message: "Datos de anime guardados con éxito" });
});


require("./app/routes/client.routes.js")(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
