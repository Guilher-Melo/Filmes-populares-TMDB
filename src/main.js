import getPopularMovies from "../api/api.js";

const lista = document.querySelector('.listFilm')
const image = 'https://image.tmdb.org/t/p/w500'

async function getAllPopularMovies() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie));
}

window.onload = function() {
  getAllPopularMovies();
}

function renderMovie(movie) {
 const { poster_path, original_title } = movie;

let li = document.createElement('li');

let img = document.createElement('img');
img.className = 'imgFilm'
img.src = `${image}${poster_path}`
img.alt = original_title

let span = document.createElement('span');
span.innerHTML = original_title
span.className = 'nameFilm'

li.appendChild(img);
li.appendChild(span);


lista.appendChild(li);

// lista.appendChild(li);
// lista.appendChild(li2);
}

