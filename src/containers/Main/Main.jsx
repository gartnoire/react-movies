import React, { Component } from "react";
import { Movies } from "../Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=51fc1bd4&s=scope").then(
      (response) => {
        response.json().then((data) => this.setState({ movies: data.Search }));
      }
    );
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?apikey=51fc1bd4&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    ).then((response) => {
      response.json().then((data) => this.setState({ movies: data.Search }));
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />

        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
