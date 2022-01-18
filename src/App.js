import './App.css';
import React from 'react';
import MoviesRow from './components/MoviesRow';
import requests from './helpers/requests';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="collection">
        <MoviesRow title="Trendings" fetchURL={requests.trendings} />
        <MoviesRow title="Top Rated" fetchURL={requests.topRated} />
        <MoviesRow title="Action Movies" fetchURL={requests.actionMovies} />
        <MoviesRow title="Horror Movies" fetchURL={requests.horrorMovies} />
        <MoviesRow title="Comedy Movies" fetchURL={requests.comedyMovies} />
        <MoviesRow title="Romantic Movies" fetchURL={requests.romanticMovies} />
      </div>
    </div>
  );
}

export default App;
