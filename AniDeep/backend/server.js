const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")


const port = 3000;

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const Anime = require('./app/models/client.model');

const animes = require('./myapi/animeclass.json');

animes.forEach(element => {
  const anime = new Anime({
    name: element.name,
    description: element.description,
    image_url: element.image_url,
    view_url: element.view_url || ''
  });

//    Anime.create(anime, (err, data) => {
//      if (err) {
//        console.error("Error al crear el anime:", err);
//      } else {
//       console.log("Anime guardado con éxito:", data);
//      }
//    });

//   //Con esto se me repite el guardado de información (LLanto)
});

app.get('/myapi/animeclass/date', (req, res) => {
  res.json({ message: "Datos de anime guardados con éxito" });
});

app.get('/myapi/animeclass', (req, res) => {
  res.json(animes)
})

require("./app/routes/client.routes.js")(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
