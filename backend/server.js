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

const Anime = require('./app/models/client.model'); // Asegúrate de que el nombre del modelo sea correcto

const animes = require('./myapi/animeclass.json')
console.log(animes);

require("./app/routes/client.routes.js")(app);

const animeRoutes = require('./app/routes/client.routes');
app.use('/myapi/animeclass', animeRoutes);

// Ruta para obtener y guardar datos de anime desde una API externa
app.get('/myapi/animeclass', (req, res) => {
  fetch('http://localhost:3000/myapi/animeclass') // Utiliza la URL de tu API externa
    .then(response => response.json())
    .then(data => {
      console.log(data);

      data.forEach(element => {
        const anime = new Anime({
          name: element.name,
          description: element.description,
          image_url: element.image_url,
          view_url: element.view_url || ''
        });

        Anime.create(anime, (err, data) => {
          if (err) {
            console.error("Error al crear el anime:", err);
          } else {
            console.log("Anime guardado con éxito:", data);
          }
        });
      });

      res.json({ message: "Datos de anime guardados con éxito" });
    })
    .catch(error => {
      console.error("Error al obtener datos de anime:", error);
      res.status(500).json({ message: "Error al obtener datos de anime" });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});