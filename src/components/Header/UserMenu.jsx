import React from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import {AppContext} from '../App'
import {fetchApi, API_URL, API_KEY_3} from '../../api/api'
import AppContextHOC from '../HOC/AppContextHOC'
import {Link} from 'react-router-dom'

class UserMenu extends React.Component {
    state = {
        dropdownOpen : false
    };

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    };

    handleLogOut = () => {
        // CallApi.delete('/authentication/session', {
        //     body: {
        //         session_id: this.props.session_id
        //     },
        //     params: {
        //         session_id: 1
        //     }
        // })
        fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                session_id: this.props.session_id
            })
        }).then(() => {
            this.props.onLogOut()
        })
    };

    render(){
        const {user} = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    tag="div"
                    onClick ={this.toggleDropdown}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <img
                        width='40'
                        className='rounded-circle'
                        src={`https://secure.gravatar.com/avatar/${
                            user.avatar.gravatar.hash
                            }.jpg?s32`}
                        onClick ={this.toggleDropdown}

                    />
                </DropdownToggle>
                <DropdownMenu rigth>
                    <DropdownItem>
                        <Link to="/account/favorites">Избранные</Link>
                    </DropdownItem>
                    <DropdownItem onClick={this.handleLogOut}>Выход</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}



export default AppContextHOC(UserMenu);