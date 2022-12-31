import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="Seach"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKeyPress}
            />
            <button
              className="btn"
              onClick={
                (() => this.props.searchMovies(this.state.search),
                () => {
                  this.props.searchMovies(this.state.search, this.state.type);
                })
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="filters">
          <label className="filter">
            <input
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
              data-type="all"
              className="filter__input"
              name="radio"
              type="radio"
            />
            <span className="filter__text">All</span>
          </label>
          <label className="filter">
            <input
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
              data-type="movie"
              className="filter__input"
              name="radio"
              type="radio"
            />
            <span className="filter__text">Movies only</span>
          </label>
          <label className="filter">
            <input
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
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
  }
}

export { Search };
