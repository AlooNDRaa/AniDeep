const sql = require("./dbConnect.js");

const Anime = function(anime) {
  this.name = anime.name;
  this.description = anime.description;
  this.image_url = anime.image_url;
  this.view_url = anime.view_url;
};

Anime.create = (newAnime, result) => {
 sql.query("INSERT INTO Anime SET ?", newAnime, (err, res) => {
   if (err) {
     console.log("ERROR: ", err);
     result(err, null);
     return;
   }

   console.log("Created anime: ", { id: res.insertId, ...newAnime });
   result(null, { id: res.insertId, ...newAnime });
 });
 };

module.exports = Anime;
