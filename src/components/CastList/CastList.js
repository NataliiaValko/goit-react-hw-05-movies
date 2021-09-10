import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiTheMovieDB from "../../service/themoviedb-api";
import s from "./CastList.module.css";

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    apiTheMovieDB.fetchСreditsMovie(movieId).then(setCast).catch(setError);
  }, []);
  return (
    <>
      {cast && (
        <>
          <h3 className={s.cast__title}>Cast:</h3>
          <ul className={s.cast__list}>
            {cast.map((actor) => (
              <li key={actor.id} className={s.cast__item}>
                <div>
                  <img
                    className={s.cast__image}
                    src={`${apiTheMovieDB.BASE_URL_IMAGE()}${
                      actor.profile_path
                    }`}
                    alt={`actor ${actor.original_name}`}
                  />
                  <h3 className={s.cast__name}>{actor.original_name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CastList;
