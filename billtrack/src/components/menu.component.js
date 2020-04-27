import React, {Component} from "react";
import {withRouter, Link} from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AuthenticationService from "../AuthenticationService";

class Menu extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{background: "#e3f2fd"}} >
                <div className="container-fluid" style={{marginLeft: "5px"}}>
                    <Link className="navbar-brand " to="/">Bill Tracker</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {!isUserLoggedIn && <Link className="nav-link" to="/sign-in">Login</Link>}
                                {isUserLoggedIn && <Link className="nav-link" to="/" onClick={AuthenticationService.logout}>Logout</Link>}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-up">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
};



export default withRouter(Menu);
