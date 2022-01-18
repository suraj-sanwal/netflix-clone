import React, {useState, useEffect} from 'react';
import instance from './../helpers/ajax';

function MoviesRow({title, fetchURL}) {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
    }, [fetchURL]);

    console.log(movies);

    return (
        <div className='movie-row'>
            <h2>{title}</h2>
            <div className='movie-container'>
                {movies.map(movie => <p key={movie.id}>{movie.original_title}</p>)}
            </div>
        </div>
    )
}

export default MoviesRow;