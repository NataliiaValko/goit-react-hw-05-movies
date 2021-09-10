import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiTheMovieDB from "../../service/themoviedb-api";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    apiTheMovieDB.fetchReviewsMovie(movieId).then(setReviews).catch(setError);
  }, []);
  return (
    <>
      {reviews[0] ? (
        <>
          <h3 className={s.reviews__title}>Reviews:</h3>
          <ul className={s.reviews__list}>
            {reviews.map((el, i) => (
              <li key={i} className={s.reviews__item}>
                <h4 className={s.reviews__name}>{`Author: ${el.author}`}</h4>
                <p className={s.reviews__text}>{el.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3 className={s.reviews__title}>Reviews:</h3>
          <p className={s.error}>We don't have any reviews for this movie</p>
        </>
      )}
    </>
  );
};

export default Reviews;
