import React, {Component} from "react";
import MoviesList from "./MoviesList";
import {API_URL, API_KEY_3} from "../../api/api";
import _ from 'lodash';
import queryString from 'query-string'

export default class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            totalPages: ''
        };
    }


    getMovies = (filters, page) => {
        const {sort_by, primary_release_year, with_genres} = filters
        const queryStringParams = {
            api_key: API_KEY_3,
            language: 'ru-RU',
            sort_by: sort_by,
            page: page,
            primary_release_year: primary_release_year,
            with_genres: with_genres.join(",")
            // [] => "" , [1] => 1, [1, 2] => 1,2

        };

        const link = `${API_URL}/discover/movie?${queryString.stringify(
            queryStringParams
        )}`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.props.changePagination(data.page, data.total_pages);
                this.setState({
                    movies: data.results,

                });
            });
    };

    componentDidMount() {
        this.getMovies(this.props.filters, this.props.page)

    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.filters, prevProps.filters)) {
            this.props.onChangePage(1);
            this.getMovies(this.props.filters, 1);
        }
        if (this.props.page !== prevProps.page) {
            this.getMovies(this.props.filters, this.props.page)
        }
    }

    render() {
        const {movies} = this.state;
        return (
            <MoviesList movies=P/>
        );
    }
}
