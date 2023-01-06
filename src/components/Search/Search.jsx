import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') searchMovies(search, type);
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <>
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn" onClick={() => searchMovies(search, type)}>
            Search
          </button>
        </div>
      </div>
      <div className="filters">
        <label className="filter">
          <input
            checked={type === 'all'}
            onChange={handleFilter}
            data-type="all"
            className="filter__input"
            name="radio"
            type="radio"
          />
          <span className="filter__text">All</span>
        </label>
        <label className="filter">
          <input
            checked={type === 'movie'}
            onChange={handleFilter}
            data-type="movie"
            className="filter__input"
            name="radio"
            type="radio"
          />
          <span className="filter__text">Movies only</span>
        </label>
        <label className="filter">
          <input
            checked={type === 'series'}
            onChange={handleFilter}
            data-type="series"
            className="filter__input"
            name="radio"
            type="radio"
          />
          <span className="filter__text">Series only</span>
        </label>
      </div>
    </>
  );
};

export { Search };
