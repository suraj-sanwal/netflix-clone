const API_KEY = 'a980be0d30dc56cec1fee2739aeebdc0';

const requests = {
    trendings: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests;