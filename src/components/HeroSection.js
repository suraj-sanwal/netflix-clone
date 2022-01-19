import React, { useState, useEffect } from "react";
import instance from './../helpers/ajax';
import requests from './../helpers/requests';
import '../styles/HeroSection.css';

function HeroSection() {
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await instance.get(requests.trendings);
            const result = request.data.results;
            setMovie(result[Math.floor(Math.random() * result.length - 1)]);
            return request;
        }
        fetchMovies();
    }, []);
    
    console.log(movie);

    return (
        <div className="herosection" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
        }}>
            <div className="movie-details">
              <h2>{movie.title ? movie.title : movie.original_name}</h2>
              <p className="description">{movie.overview}</p>
              <div className="buttons">
                  <button className="btn">Play</button>
                  <button className="btn">My List</button>
              </div>
            </div>
        </div>
    )
}

export default HeroSection;