import { Switch, Route, Redirect } from "react-router-dom";

import { useState, useEffect, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "../Navigation";
import Container from "../Container";
import s from "./App.module.css";
import apiTheMovieDB from "../../service/themoviedb-api";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "../../pages/MovieDetailsPage"
    /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    apiTheMovieDB
      .fetchTrendingDayMovie()
      .then((movies) => setMovies([...movies]))
      .catch(setError);
  }, []);

  return (
    <>
      <ToastContainer />
      <header className={s.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Switch>
          <Suspense fallback={<div>Load...</div>}>
            <Route path="/" exact>
              <HomePage movies={movies} />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Suspense>
        </Switch>
      </main>
    </>
  );
};

export default App;
