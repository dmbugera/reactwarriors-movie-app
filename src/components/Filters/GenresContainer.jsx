import React from 'react'
import {API_URL, API_KEY_3} from "../../api/api";
import PropTypes from 'prop-types'
import GenresList from './Containers/GenresList'

export default class GenresContainer extends React.Component{

    // static propTypes = {
    //     with_genres: PropTypes.string.isRequird,
    //     onChangeFilter : PropTypes.func.isRequired
    // };

    constructor() {
        super();

        this.state = {
            genres: []
        };
    }

    getGenresList = () => {
        const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    genres: data.genres,
                });
            })
    };
    componentDidMount() {
        this.getGenresList();
    }

    render() {
        const {
            onChangeGenres,
            with_genres
        } = this.props;
        return (
            <GenresList
                genres = {this.state.genres}
                with_genres = {with_genres}
                onChangeGenres = {onChangeGenres}
            />
        )
    }

}
