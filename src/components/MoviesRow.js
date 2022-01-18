import React, {useState, useEffect} from 'react';
import instance from './../helpers/ajax';
import '../styles/MoviesRow.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MoviesRow({title, fetchURL}) {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
    }, []);

    console.log(movies);

    return (
        <div className='movie-row'>
            <h2>{title}</h2>
            <div className='movie-container'>
                {movies.map(movie => <img key={movie.id} src={`${BASE_URL}${movie.poster_path}`} alt={movie.title}/>)}
            </div>
        </div>
    )
}

export default MoviesRow;