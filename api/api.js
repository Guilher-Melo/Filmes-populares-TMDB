import {apiKey} from '../config/apiKey.js';

export default async function getPopularMovies () {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const fetchResp = await fetch(url);
    const { results } = await fetchResp.json();
    return results;
  } catch (e) {
    console.log(e);
  }
  
}