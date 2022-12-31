import React, { Component } from "react";
import { Movies } from "../Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=51fc1bd4&s=scope`).then(
      (response) => {
        response
          .json()
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          );
      }
    );
  }

  searchMovies = (str, type) => {
    this.setState({ loading: true });

    fetch(
      `https://www.omdbapi.com/?apikey=51fc1bd4&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    ).then((response) => {
      response
        .json()
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />

        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
