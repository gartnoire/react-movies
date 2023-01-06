import React, { useState, useEffect } from 'react';
import { Movies } from '../Movies/Movies';
import { Preloader } from '../../components/Preloader/Preloader';
import { Search } from '../../components/Search/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type) => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=51fc1bd4&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    ).then((response) => {
      response.json().then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=51fc1bd4&s=scope`)
      .then((response) => {
        response.json().then((data) => {
          setMovies(data.Search);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />

      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export { Main };
