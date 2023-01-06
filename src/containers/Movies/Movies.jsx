import { Movie } from '../../components/Movie/Movie';

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <section className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4 className="movies__alert">Nothing movies</h4>
      )}
    </section>
  );
};

export { Movies };
