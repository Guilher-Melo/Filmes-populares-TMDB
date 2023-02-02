import { apiKey } from '../config/apiKey.js';

export async function getPopularMovies () {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ apiKey }&language=en-US&page=1`
    const fetchResp = await fetch(url);
    const { results } = await fetchResp.json();
    console.log(results);
    return results;
  } catch (e) {
    console.log(e);
  }  
}

export async function getMovie (search) {
  try{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&query=${search}&language=en-US&page=1&include_adult=false`
    const fetchResp = await fetch(url);
    const { results } = await fetchResp.json();
    console.log(results);
    return results;
  } catch (e) {
    console.log(e);
  }
  
}