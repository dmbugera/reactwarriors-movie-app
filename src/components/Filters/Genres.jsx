import React from 'react';
import PropTypes from 'prop-types'
import GenresHOC from './GenresHOC'

const GenresList = ({genres = [], with_genres=[], onChangeGenres}) => {
    return (<div>
        <label htmlFor="sort_by">Жанр:</label>
        {genres.map(genre => {
            return (
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id={genre.id} value={genre.id} checked={with_genres.includes(String(genre.id))} key={genre.id} onChange={onChangeGenres}/>
                    <label className="form-check-label" htmlFor={genre.id}>{genre.name}</label>
                </div>
            )
        })}
    </div>)
};


GenresList.defaultProps = {
    genres : [],
    onChangeGenres: null,
    with_genres: []
};

GenresList.propTypes = {
    genres : PropTypes.array.isRequired,
    onChangeGenres : PropTypes.func.isRequired,
    with_genres: PropTypes.array.isRequired
};


export default GenresHOC(GenresList);