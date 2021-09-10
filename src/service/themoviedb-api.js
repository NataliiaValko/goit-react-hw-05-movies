const BASE_URL = "https://api.themoviedb.org/3/";
const key = "7d26037feeaf4d437e8145fcf75aadec";
const mediaType = "movie";
const timeWindow = "day";

const BASE_URL_IMAGE = () => {
  return "https://image.tmdb.org/t/p/w500";
};

const fetchTrendingDayMovie = () => {
  return fetch(`${BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((r) => r.results)
    .catch(console.log);
};

const fetchSearchQueryMovie = (query) => {
  return fetch(`${BASE_URL}search/movie?query=${query}&api_key=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((r) => r.results)
    .catch(console.log);
};

const fetchDetailsMovie = (id) => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${key}`)
    .then((response) => {
      return response.json();
    })
    .catch(console.log);
};

const fetchСreditsMovie = (id) => {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((r) => r.cast)
    .catch(console.log);
};

const fetchReviewsMovie = (id) => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((r) => r.results)
    .catch(console.log);
};

const apiTheMovieDB = {
  fetchTrendingDayMovie,
  fetchSearchQueryMovie,
  fetchDetailsMovie,
  fetchСreditsMovie,
  fetchReviewsMovie,
  BASE_URL_IMAGE,
};

export default apiTheMovieDB;
