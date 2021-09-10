import {
  NavLink,
  Link,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import s from "./MovieDetailsPage.module.css";
import { IoMdArrowBack } from "react-icons/io";
import Container from "../../components/Container";
import Title from "../../components/Title";
import GenresList from "../../components/GenresList";
import apiTheMovieDB from "../../service/themoviedb-api";

const CastList = lazy(() => import("../../components/CastList"));
const Reviews = lazy(() => import("../../components/Reviews"));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [locationFrom, setLocationFrom] = useState(
    location?.state?.from ?? "/"
  );

  useEffect(() => {
    apiTheMovieDB.fetchDetailsMovie(movieId).then(setMovie).catch(setError);
  }, [movieId]);

  return (
    <>
      {movie && (
        <section className={s.detailsMovie}>
          <Container>
            <Link className={s.button} type="button" to={locationFrom}>
              <IoMdArrowBack />
            </Link>
            <div className={s.cardMovie}>
              <img
                className={s.image}
                src={`${apiTheMovieDB.BASE_URL_IMAGE()}${movie.poster_path}`}
                alt={`poster for the movie ${movie.title}`}
              />

              <div className={s.mainInfo}>
                <Title>{movie.title}</Title>
                <div className={s.mainInfo__wrapper}>
                  <p className={s.label__flex}>Popularity:</p>
                  <span className={s.text}>{movie.popularity}</span>
                </div>

                <div className={s.mainInfo__box}>
                  <p className={s.label}>Overview</p>
                  <p className={s.text__indent}>{movie.overview}</p>
                </div>
                <p className={s.label}>Genres</p>
                <GenresList genres={movie.genres} />
              </div>
            </div>
            <div className={s.addInfo}>
              <h3 className={s.title}>Additional information</h3>
              <ul className={s.addInfo__list}>
                <li className={s.addInfo__item}>
                  <NavLink to={`${url}/cast`} className={s.text}>
                    Cast
                  </NavLink>
                </li>
                <li className={s.addInfo__item}>
                  <NavLink to={`${url}/reviews`} className={s.text}>
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Suspense fallback={<div>Load...</div>}>
                <Route path={`/movies/:movieId/cast`}>
                  {movie && <CastList />}
                </Route>
                <Route path={`/movies/:movieId/reviews`}>
                  {movie && <Reviews />}
                </Route>
              </Suspense>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
