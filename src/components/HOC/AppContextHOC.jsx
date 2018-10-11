import React from 'react'
//import App from '../App'
import {AppContext} from "../App"
//App.AppContext
export default Component => class AppContextHOC extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {(value) => <Component
                        {...this.props} //???
                       // update={value.updateUser}
                        {...value}
                    />}
            </AppContext.Consumer>
        )
    }
}
