import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Trending from './components/Trending'

const API_KEY = "087a55e8903a9c161c9228f783a10ad4";
const API = "https://api.themoviedb.org/3/";
const MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=087a55e8903a9c161c9228f783a10ad4&page=1";
const TV = "https://api.themoviedb.org/3/discover/tv?api_key=087a55e8903a9c161c9228f783a10ad4"
const IMAGES = "https://image.tmdb.org/t/p/original/";
const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

function App() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(TV)
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
      <Navbar></Navbar>
      <Trending></Trending>
      {tvShows.slice(0,5).map(tv => 
        <div key={tv.id} className="container">
          <img key={tv.id} src={`${IMAGES}${tv.poster_path}`} alt={tv.name}></img>
        </div>
      )}
    </div>
  );
}

export default App;