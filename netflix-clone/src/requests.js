const API_KEY = '4c94dbbd5b88e1e29ae805d8a61d22bf';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv/?api_key=${API_KEY}&with_genres=99`,
};
export default requests;

// https://api.themoviedb.org/3/discover/tv/?api_key=4c94dbbd5b88e1e29ae805d8a61d22bf&with_genres=27
// `/discover/tv/?api_key=${API_KEY}&with_genres=27`
