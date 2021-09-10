import PropTypes from "prop-types";
import s from "./GenresList.module.css";

const GenresList = ({ genres }) => {
  return (
    <ul className={s.genres}>
      {genres.map((genre) => (
        <li key={genre.id} className={s.genre__item}>
          <p className={s.text}>{genre.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape),
};
