/*rcc - create component*/


import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import Header from "./Header/Header";
import {API_KEY_3, API_URL, fetchApi} from '../api/api' // Почему {} ??
import Cookies from 'universal-cookie';
import MoviesPage from './pages/MoviesPage/MoviesPage'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MoviePage from './pages/MoviePage/MoviePage'
import AccountFavorites from './pages/AccountPage/AccountFavorites'


const cookies = new Cookies();

export const AppContext = React.createContext();
console.log(AppContext);
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
            session_id: cookies.get('session_id'),
            isAuth: true
        }

        this.baseState = this.state;
    }

    updateUser = user => {
        this.setState({
            user,
            isAuth: true
        })
    };

    updateSessionId = session_id => {
        cookies.set('session_id', session_id, {
            path: '/',
            maxAge: '2592000'
        });
        this.setState({
            session_id
        })
    };

    updateAuth = (user, session_id) => {
        console.log(session_id)
        cookies.set('session_id', session_id, {
            path: '/',
            maxAge: '2592000'
        });
        this.setState({
            session_id,
            user,
            isAuth: true
        })
    }

    onLogOut = () => {
        cookies.remove('session_id');
        this.setState ({
            user: null,
            session_id: null,
            isAuth: null
        })
    };


    onChangeGenres = event => {
        const id = event.target.value;
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

        if( this.state.session_id ) {
            fetchApi(
                `${API_URL}/account?api_key=${API_KEY_3}&session_id=${this.state.session_id}`
            ).then(user => {
                this.updateAuth(user, this.state.session_id);
            })
        }

    }



    render() {
        const {user, session_id, isAuth} =this.state;
        console.log(session_id, isAuth)
        return isAuth || !session_id  ? (

        <BrowserRouter>
        <AppContext.Provider value={{
            user,
            session_id,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId,
            onLogOut: this.onLogOut,
            updateAuth: this.updateAuth,
            isAuth
        }}>
            <div>
            <Header user={user}/>
                <Route exact path="/" component={MoviesPage}/>
                <Route exact path="/movie/:id" component={MoviePage}/>
                <Route path="/account/favorites" component={AccountFavorites} />


                {/*
                           "/" - MoviesPage
                           "/movie" - Movie
                */}
            </div>
        </AppContext.Provider>
        </BrowserRouter>
        ): <p>...Loading</p>;
    }
};
