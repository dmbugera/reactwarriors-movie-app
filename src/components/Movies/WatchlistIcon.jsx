import React, {Component} from 'react';
import CallApi, {API_URL, API_KEY_3, fetchApi} from "../../api/api";
import AppContextHOC from '../HOC/AppContextHOC'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(faBookmark, fas, far);


class WatchlistIcon extends Component {


    constructor() {
        super();

        this.state = {
            watchlist: false
        }
    }

    toggleStatus = () => {
        this.setState(prevState => ({
            watchlist: !prevState.watchlist
        }), () => {
            console.log(this.state.watchlist);
            CallApi.post('/account/{account_id}/watchlist', {
                params: {
                    session_id: this.props.session_id
                },
                body: {
                    media_type: "movie",
                    media_id: this.props.id,
                    watchlist: this.state.watchlist
                }
            })
        })
    };

    render() {
        return (
            <div className="col-2 text-center">
                <FontAwesomeIcon
                    icon={ this.state.watchlist ? ['fas', 'bookmark'] : ['far', 'bookmark']}
                    onClick={this.toggleStatus}
                />
            </div>
        );
    }
}

export default AppContextHOC(WatchlistIcon);
