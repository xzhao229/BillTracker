import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../AuthenticationService';
class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            console.log(this.props)
            return <Route {...this.props.path} />
        } else {
            return <Redirect to="/sign-in" />
        }
    }
}
export default AuthenticatedRoute