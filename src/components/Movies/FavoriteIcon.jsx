import React, {Component} from 'react';
import CallApi, {API_URL, API_KEY_3, fetchApi} from "../../api/api";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import AppContextHOC from '../HOC/AppContextHOC'

library.add( faHeart, fas, far);

 class FavoriteIcon extends Component {
    constructor() {
        super();

        this.state = {
            favorite: false,
        }
    }
    toggleStatus = () => {
        if(this.props.isAuth){
            this.setState(prevState => ({
                favorite: !prevState.favorite
            }), () => {
                console.log(this.state.favorite)
                CallApi.post('/account/{account_id}/favorite', {
                    params: {
                        session_id: this.props.session_id
                    },
                    body: {
                        "media_type": "movie",
                        "media_id": this.props.id,
                        "favorite": this.state.favorite
                    }
                })
            })
        } else {

        }




    };

    render() {
        return (
            <div className="col-2 text-center">
                <FontAwesomeIcon
                    icon={ this.state.favorite ? ['fas', 'heart'] : ['far', 'heart']}
                    onClick={this.toggleStatus}
                />
            </div>
        );
    }
}

export default AppContextHOC(FavoriteIcon)
