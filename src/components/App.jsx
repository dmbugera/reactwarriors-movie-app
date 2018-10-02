import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import Header from "./Header/Header";
import {API_KEY_3, API_URL, fetchApi} from '../api/api' // Почему {} ??
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const AppContext = React.createContext();
console.log(AppContext);
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
            session_id: null,
            filters: {
                sort_by: "popularity.desc",
                primary_release_year: '2018',
                with_genres: []
            },
            page: 1,
            totalPages: ''
        }

        this.baseState = this.state;
    }

    updateUser = user => {
        this.setState({
            user
        })
    };

    updateSessionId = session_id => {
        cookies.set('session_id', session_id, {
            path: '/',
            maxAge: '2592000'
        })
        this.setState({
            session_id
        })
    }

    onChangeFilters = event => {
        const newFilters = {
            ...this.state.filters,
            [event.target.name]: event.target.value
        };
        this.setState(prevState => ({
            filters: newFilters,
        }))
    };

    changePagination = (page,totalPages) =>{
        this.setState({
            page,
            totalPages
    })
    };

    onChangeGenres = event => {
        const id = event.target.value
        this.setState({
            filters: {
                ...this.state.filters,
                with_genres: this.state.filters.with_genres.includes(id) ?
                    this.state.filters.with_genres.filter(genre => genre !== id ):
                    [...this.state.filters.with_genres, id]
            }
        })
    };


    resetFilters = () => {
        this.setState(this.baseState);
    };

    onChangePage = page => {
        this.setState({
            //page: page
            page
        })
    };

    componentDidMount(){
        const session_id = cookies.get('session_id');
        if( session_id ) {
            fetchApi(
                `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
            ).then(user => {
                this.updateUser(user);
            })
        }

    }



    render() {
        // console.log(this.state.filters.with_genres);
        const {filters, page, totalPages, user} =this.state;
        return (
        <AppContext.Provider value={{
            user: user,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId

        }}>
            <div>
            <Header user={user}/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-body">
                                <h3>Фильтры:</h3>
                                <div className="btn-group">
                                    <button
                                        type='button'
                                        className="btn btn-primary mx-4"
                                        onClick={this.resetFilters}
                                    >
                                        Reset
                                    </button>
                                </div>
                                <Filters
                                    page = {page}
                                    filters={filters}
                                    onChangeFilters={this.onChangeFilters}
                                    onChangePage = {this.onChangePage}
                                    totalPages = {totalPages}
                                    onChangeGenres = {this.onChangeGenres}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MoviesList
                            page = {page}
                            filters={filters}
                            onChangePage = {this.onChangePage}
                            changePagination = {this.changePagination}
                        />
                    </div>
                </div>
            </div>
            </div>
        </AppContext.Provider>
        );
    }
};
