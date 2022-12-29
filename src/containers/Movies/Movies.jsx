import { Movie } from "../../components/Movie/Movie";

const Movies = (props) => {
  const { movies } = props;

  return (
    <section className="movies">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          {...movie}
        />
      ))}
    </section>
  );
};

export { Movies };
