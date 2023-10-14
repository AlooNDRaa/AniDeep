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

const animes = require('./myapi/animeclass');

app.get('/myapi/animeclass/', (req, res) => {
  res.json(animes);
});

require("./app/routes/client.routes.js")(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
