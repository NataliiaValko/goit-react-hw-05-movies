import PropTypes from "prop-types";
import apiTheMovieDB from "../../service/themoviedb-api";
import s from "./MoviesItem.module.css";

const MoviesItem = ({ url, title }) => {
  return (
    <>
      <div className={s.card__imageWrapper}>
        <img
          className={s.card__image}
          src={`${apiTheMovieDB.BASE_URL_IMAGE()}${url}`}
          alt={title}
        />
      </div>
      <h3 className={s.card__title}>{title}</h3>
    </>
  );
};

export default MoviesItem;

MoviesItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
};
