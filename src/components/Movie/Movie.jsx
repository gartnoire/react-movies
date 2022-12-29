const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div
      id={id}
      className="card"
    >
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            alt={title}
            className="activator"
            src={`https://via.placeholder.com/300x550?text=${title}`}
          />
        ) : (
          <img
            alt={title}
            className="activator"
            src={poster}
          />
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title activator grey-text text-darken-4">
          {title}
        </h3>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};

export { Movie };
