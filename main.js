import { getPopularMovies, getMovie } from "./api/api.js";

const lista = document.querySelector('.listFilm');
const image = 'https://image.tmdb.org/t/p/w500';

const form = document.querySelector('#form');
const search = document.querySelector('#search');

const iconHome = document.querySelector('.material-symbols-outlined');

async function getAllPopularMovies() {
  const movies = await getPopularMovies();
  movies.forEach(movie => renderMovie(movie));
}

window.onload = function() {
  getAllPopularMovies();
}

function renderMovie(movie) {
 const { poster_path, title, overview, vote_average } = movie;

let li = document.createElement('li');
let div = document.createElement('div');
let nota = document.createElement('span');
nota.innerText = vote_average;

if (vote_average >= 8) {
  nota.className = 'green';
} else if(vote_average > 6) {
  nota.className = 'yellow';
} else {
  nota.className = 'red';
}
div.className = 'overview';
let h3 = document.createElement('h3');
h3.innerText = title;
h3.className = 'titleView'
let p = document.createElement('p');
p.className = 'textMovie';
p.innerText = overview;

div.appendChild(h3);
div.appendChild(p);
div.appendChild(nota);

let img = document.createElement('img');
img.className = 'imgFilm'
img.src = `${image}${poster_path}`
img.alt = title


let span = document.createElement('span');
span.innerHTML = title
span.className = 'nameFilm'

li.appendChild(img);
li.appendChild(span);
li.appendChild(div);


lista.appendChild(li);

img.addEventListener('click', showDetails)
}


function showDetails(ev) {
  const click = ev.target;
  const div = click.nextSibling.nextSibling;
  div.style.display = 'block';
  hideDetails(div);
}

function hideDetails(div) {
  div.addEventListener('click', ()=> {
    if(div.style.display === 'block') {
      div.style.display = 'none';
    }
  })
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm) {
    const titulo = document.querySelector('.titulo');
    titulo.innerText = "Results"
    cleanList();
    async function getMovieTerm() {
      const movie = await getMovie(searchTerm);
      movie.forEach(movie=> renderMovie(movie));
    }
    getMovieTerm();
  } else {
      getHome();
  }
})

function cleanList(){
  const list = document.querySelector('.listFilm');
  list.innerText = "";
}

iconHome.addEventListener('click', getHome);

function getHome() {
  const titulo = document.querySelector('.titulo');
  titulo.innerText = "Popular Movies"
  cleanList();
  getAllPopularMovies();
  search.value = '';
}