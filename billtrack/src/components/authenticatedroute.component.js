import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../AuthenticationService';
class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route path={this.props.path} component={this.props.component} />
        } else {
            return <Redirect to="/sign-in" />
        }
    }
}
export default AuthenticatedRoute