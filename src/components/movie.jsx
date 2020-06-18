import React, { Component } from "react";
import Like from "./common/like";
class Movie extends Component {
  render() {
    const { movie, onDelete } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like />
        </td>
        <td>
          <button onClick={onDelete} className="btn btn-danger btn-sm">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;