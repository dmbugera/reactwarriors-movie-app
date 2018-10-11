import React from "react";
import {Link} from 'react-router-dom'
import FavoriteIcon from './FavoriteIcon'
import WatchlistIcon from './WatchlistIcon'


export default class MovieItem extends React.Component {


    // toggleMovieStatus = (status) => {
    //     this.setState(prevState => ({
    //         status: !prevState.status
    //     }))
    // }

    render() {
        const {item} = this.props;
        return (
            <div className="card" style={{width: "100%"}}>
                <img
                    className="card-img-top card-img--height "
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                    item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <Link className="card-title" to={`/movie/${item.id}`}>{item.title}</Link>
                    <div className="row">
                        <div className="col-8">
                            <div className="card-text">Рейтинг: {item.vote_average}</div>
                        </div>
                        <WatchlistIcon
                            id= {item.id}
                        />
                        <FavoriteIcon
                            id= {item.id}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
