import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = "087a55e8903a9c161c9228f783a10ad4";
const API = "https://api.themoviedb.org/3/";
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?api_key=087a55e8903a9c161c9228f783a10ad4&page=1";
const TV_API = `https://api.themoviedb.org/3/tv?api_key=${API_KEY}&language=en-US`;
const API_TEST = "https://api.themoviedb.org/3/discover/tv?api_key=087a55e8903a9c161c9228f783a10ad4"
const IMAGES = "https://image.tmdb.org/t/p/original/";

function App() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(API_TEST)
    .then(response => {
      return response.json();
    })
    .then(json => {
      setTvShows(json.results);
      console.log(json.results);
    })
  }, [])

  return (
    <div className="App">
      {tvShows.map(tv => 
        <div className="container">
          <img src={`${IMAGES}${tv.poster_path}`} alt={tv.name}></img>
        </div>
      )}
    </div>
  );
}

export default App;