import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import MoviesItem from "../MoviesItem";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.movies__list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={s.movies__item}>
          <Link
            to={{ pathname: `/movies/${id}`, state: { from: location } }}
            className={s.card__link}
          >
            <MoviesItem url={poster_path} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
