import React, {useState, useEffect} from 'react';
import instance from './../helpers/ajax';
import '../styles/MoviesRow.css';
import Trailer from './Trailer';
import movieTrailer from 'movie-trailer';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MoviesRow({title, fetchURL}) {
    const [ movies, setMovies ] = useState([]);
    const [trailer, setTrailer] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
    }, []);

    const handleClick = (movie) => {
        movieTrailer(movie.title ? movie.title : movie.original_name || '').then((url) => {
            const urlParam = new URLSearchParams(new URL(url).search);
            setTrailer(urlParam.get('v'));
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='movie-row'>
            <h2>{title}</h2>
            <div className='movie-container'>
                {movies.map(movie => <img onClick={() => handleClick(movie)} key={movie.id} src={`${BASE_URL}${movie.poster_path}`} alt={movie.title}/>)}
            </div>
            
            {
                trailer && <Trailer trailerUrl={trailer}/>
            }
            
        </div>
    )
}

export default MoviesRow;