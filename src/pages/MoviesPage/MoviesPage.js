import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import s from "./MoviesPage.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import Container from "../../components/Container";
import MoviesList from "../../components/MoviesList";
import apiTheMovieDB from "../../service/themoviedb-api";

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("query"));
  }, [location.search]);

  useEffect(() => {
    query &&
      apiTheMovieDB
        .fetchSearchQueryMovie(query)
        .then(setMovies)
        .catch(setError);
  }, [query]);

  const handleFormSubmit = (query) => {
    setMovies(null);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <section className={s.searchbar}>
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
        {movies && <MoviesList movies={movies} />}
        {movies && movies.length === 0 && (
          <p>
            Oops! We couldn’t find anything =/. Change your request, please!
          </p>
        )}
      </Container>
    </section>
  );
};

export default MoviesPage;
