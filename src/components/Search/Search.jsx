import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
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
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
