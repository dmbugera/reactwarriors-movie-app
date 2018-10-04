import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(faBookmark, faHeart, fas, far);

export default class MovieItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card" style={{ width: "100%" }}>
                <img
                    className="card-img-top card-img--height"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                    item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="row">
                        <div className="col-8">
                            <div className="card-text">Рейтинг: {item.vote_average}</div>
                        </div>
                        <div className="col-2 text-center">
                            <FontAwesomeIcon icon={['far', 'bookmark']}/>
                        </div>
                        <div className="col-2 text-center">
                            <FontAwesomeIcon icon={['far', 'heart']}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
