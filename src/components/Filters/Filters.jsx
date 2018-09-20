import React from "react";
import SortBy from './SortBy'
import PrimaryReleaseYear from './PrimaryReleaseYear'
import Pagination from './Pagination'
import Genres from './Genres'

export default class Filters extends React.Component {
    render() {
        const {
            filters: {sort_by, primary_release_year, with_genres},
            page,
            onChangeFilters,
            onChangePage,
            totalPages,
            onChangeGenres
        } = this.props;
        return (
            <form className="mb-3">
                <SortBy
                    sort_by={sort_by}
                    onChangeFilters={onChangeFilters}
                />
                <PrimaryReleaseYear
                    primary_release_year={primary_release_year}
                    onChangeFilters={onChangeFilters}
                />
                <Genres
                    with_genres={with_genres}
                    onChangeGenres={onChangeGenres}
                />
                <Pagination
                    page={page}
                    onChangePage={onChangePage}
                    totalPages={totalPages}
                />
            </form>
        );
    }
}
