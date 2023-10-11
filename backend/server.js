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

async function api() {

const url = 'https://anilistmikilior1v1.p.rapidapi.com/deleteAnimeListEntry';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '649f17c5ecmsha46520f81dfc3d1p13591ejsn3843b7e10638',
		'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		animeId: '<REQUIRED>'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})