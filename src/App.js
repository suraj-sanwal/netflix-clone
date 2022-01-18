import './App.css';
import React from 'react';
import MoviesRow from './components/MoviesRow';
import requests from './helpers/requests';

function App() {
  return (
    <div className="App">
      <h1>First React APP!</h1>
      <MoviesRow title="Trendings" fetchURL={requests.trendings} />
      <MoviesRow title="Top Rated" fetchURL={requests.topRated} />
      <MoviesRow title="Action Movies" fetchURL={requests.actionMovies} />
      <MoviesRow title="Horror Movies" fetchURL={requests.horrorMovies} />
      <MoviesRow title="Comedy Movies" fetchURL={requests.comedyMovies} />
      <MoviesRow title="Romantic Movies" fetchURL={requests.romanticMovies} />
    </div>
  );
}

export default App;
