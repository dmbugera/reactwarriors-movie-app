import React from 'react'
import {API_URL, API_KEY_3} from "../../api/api";
import PropTypes from 'prop-types'

export default class Genres extends React.Component{

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
            <div>
                <label htmlFor="sort_by">Жанр:</label>
                {this.state.genres.map(genre => {
                return (
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id={genre.id} value={genre.id} checked={with_genres.includes(String(genre.id))} key={genre.id} onChange={onChangeGenres}/>
                        <label className="form-check-label" htmlFor={genre.id}>{genre.name}</label>
                    </div>
                )
            })}
            </div>

        )
    }

}
