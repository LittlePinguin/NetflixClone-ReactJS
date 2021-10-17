import React, { useEffect, useState } from 'react'
import '../components/Trending.css'

const API_KEY = "087a55e8903a9c161c9228f783a10ad4";
const IMAGES = "https://image.tmdb.org/t/p/original/";
const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch(TRENDING)
        .then(response => {
          return response.json();
        })
        .then(json => {
          setTrending(json.results);
          console.log(json);
        })
      }, [])

    return (
        <div className="trending">
            <div className="carousel">
                <div className="img-box one">
                    <img className="first" src={`${IMAGES}${trending[0].poster_path}`}></img>
                </div>
                <div className="img-box two">
                    <img className="second" src={`${IMAGES}${trending[1].poster_path}`}></img>
                </div>
                <div className="img-box three">
                    <img className="third" src={`${IMAGES}${trending[2].poster_path}`}></img>
                </div>
            </div>
        </div>
    )
}

export default Trending
