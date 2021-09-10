import PropTypes from "prop-types";
import s from "./HomePage.module.css";
import Container from "../../components/Container";
import Title from "../../components/Title";
import MoviesList from "../../components/MoviesList";

const HomePage = ({ movies }) => {
  return (
    <section className={s.trandingMovies}>
      <Container>
        <Title>Trending films today</Title>
        {movies && <MoviesList movies={movies} />}
      </Container>
    </section>
  );
};

export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
