import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm'


// `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
// `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`
// `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY_3}`

export default class Login extends React.Component {

    constructor (){
        super();
        this.state = {
            showModal: false
        }
    }


    toggleModal = () =>{
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }))
    };


    render() {
        return (
            <div>
                <button
                    className="btn btn-success"
                    type="button"
                    onClick={this.toggleModal}
                >
                    Login
                </button>
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                    <ModalBody>
                        <LoginForm
                            updateUser={this.props.updateUser}
                            updateSessionId={this.props.updateSessionId}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
