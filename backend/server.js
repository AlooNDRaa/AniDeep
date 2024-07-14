const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const animes = require('./myapi/animeclass.json');

dotenv.config();

const app = express();
const port = 3001;

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/myapi/animeclass/date', (req, res) => {
  res.json({ message: 'Datos de anime guardados con éxito' });
});

app.get('/myapi/animeclass', (req, res) => {
  res.json(animes);
});

require('./app/routes/client.routes.js')(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
