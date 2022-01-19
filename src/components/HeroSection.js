import React, { useState, useEffect } from "react";
import instance from './../helpers/ajax';
import requests from './../helpers/requests';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/HeroSection.css';
import movieTrailer from 'movie-trailer';
import Trailer from './Trailer';

function HeroSection() {
    const [ movie, setMovie ] = useState([]);
    const [trailer, setTrailer] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            const request = await instance.get(requests.trendings);
            const result = request.data.results;
            setMovie(result[Math.floor(Math.random() * result.length - 1)]);

            return request;
        }
        fetchMovies();
    }, []);

    movieTrailer(movie.title ? movie.title : movie.original_name || '').then((url) => {
        const urlParam = new URLSearchParams(new URL(url).search);
        setTrailer(urlParam.get('v'));
    });

    return (
        
        <div className="herosection" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
        }}>
            <div className="movie-details">
              <h2>{movie.title ? movie.title : movie.original_name}</h2>
              <p className="description">{movie.overview}</p>
              <div className="buttons">
                  <Popup trigger={<button className="btn">Play</button>} position="center center" modal>
                    <div className="heroVideo">
                        <Trailer trailerUrl={trailer}/>
                    </div>
                  </Popup>
                  <button className="btn">My List</button>
              </div>
            </div>
        </div>
    )
}

export default HeroSection;