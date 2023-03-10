import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { deleteMovie } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4,
    }

    handleDelete = (id) => {
        this.setState(deleteMovie(id));
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    render() {

        const { length: count } = this.state.movies;
        const { pageSize, currentPage } = this.state;

        if (count === 0) return <p>There are no movies</p>;

        return <React.Fragment>
            <p>Showing {count} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                            <td><button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table >
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange} />
        </React.Fragment>
    }
}

export default Movies;