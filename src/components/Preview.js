import React from 'react'
import { useEffect, useState } from 'react';
import '../components/Preview.css'
import { FaAngleRight } from 'react-icons/fa'
import { Link, BrowserRouter } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

const API_KEY = "087a55e8903a9c161c9228f783a10ad4";
const API = "https://api.themoviedb.org/3/";
const MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
const IMAGES = "https://image.tmdb.org/t/p/original/";

function Preview() {
    const [tvShows, setTvShows] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(TV)
    .then(response => {
      return response.json();
    })
    .then(json => {
      setTvShows(json.results);
      console.log(json.results);
    });

    fetch(MOVIES)
    .then(response => {
      return response.json();
    })
    .then(json => {
      setMovies(json.results);
    })
  }, [])

    return (
        <div className="Preview">
            <div className="container tv">
                <div className="header">
                    <p className="category">TV Shows</p>
                    <a href="/tv/all" className="more">See more<FaAngleRight className="icon"></FaAngleRight></a>
                </div>
                <div className="list">
                    {tvShows.slice(0,5).map(tv => 
                        <img key={tv.id} src={`${IMAGES}${tv.poster_path}`} alt={tv.name} onClick={()=>{
                            return(<BrowserRouter><Link to="/movies/movie-details/" component={MovieDetails}></Link></BrowserRouter>)}}></img>
                        
                    )}
                </div>
            </div>
            <div className="container movies">
                <div className="header">
                <p className="category">Movies</p>
                <a href="/movies/all" className="more">See more<FaAngleRight className="icon"></FaAngleRight></a>
                </div>
                <div className="list">
                {movies.slice(0,5).map(movie => 
                    <img key={movie.id} src={`${IMAGES}${movie.poster_path}`} alt={movie.name}></img>
                )}
                </div>
            </div>
        </div>
    )
}

export default Preview
