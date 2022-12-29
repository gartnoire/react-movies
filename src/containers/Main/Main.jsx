import React, { Component } from "react";
import { Movies } from "../Movies/Movies";

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

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h5>Loading content...</h5>
        )}
      </main>
    );
  }
}

export { Main };
