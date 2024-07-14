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



// Anime.getAll = (result) => {
//   sql.query("SELECT * FROM Anime", (err, res) => {
//     if (err) {
//       console.log("ERROR: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("Animes: ", res);
//     result(null, res);
//   });
// };

// Anime.findById = (animeId, result) => {
//   sql.query("SELECT * FROM Anime WHERE id = ?", animeId, (err, res) => {
//     if (err) {
//       console.log("ERROR: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("Anime found: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     result({ kind: "not_found" }, null);
//   });
// };

// Anime.updateById = (id, anime, result) => {
//   sql.query(
//     "UPDATE Anime SET name = ?, description = ?, image_url = ?, view_url = ? WHERE id = ?",
//     [anime.name, anime.description, anime.image_url, anime.view_url, id],
//     (err, res) => {
//       if (err) {
//         console.log("ERROR: ", err);
//         result(err, null);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("Updated anime: ", { id: id, ...anime });
//       result(null, { id: id, ...anime });
//     }
//   );
// };

// Anime.remove = (id, result) => {
//   sql.query("DELETE FROM Anime WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("ERROR: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("Deleted anime with ID: ", id);
//     result(null, res);
//   });
// };

module.exports = Anime;
