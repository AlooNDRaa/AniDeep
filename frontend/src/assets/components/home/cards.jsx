import { useState, useEffect } from 'react';
import '../../styles/App.css'

export function Cards() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('/myapi/animeclass') 
      .then((response) => response.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center flex-wrap">
      {animes.map((anime) => (
        <div className="box" key={anime.id} style={{ display: anime.id <= 3 ? 'block' : 'none' }}>
          <div className="body">
            <div className="imgContainer">
              <img src={anime.image_url} alt={anime.name} />
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">{anime.name}</h3>
                <p className="text-desc">{anime.description}</p>
                <a href={anime.view_url} className="text-url">{anime.view_url}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
