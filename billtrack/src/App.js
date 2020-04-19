import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import Menu from "./components/menu.component";
import AuthenticatedRoute from "./components/authenticatedroute.component";
import Dashboard from "./components/dashboard.component";
import AddBills from "./components/addBills.component";


function App(props) {
  return (
  <Router>
        <Menu />

        <Switch>
            <Route exact path='/' component={Home} />

            <Route path="/sign-in" component={Login} />

            <Route path="/sign-up" component={SignUp} />

            <AuthenticatedRoute path="/dashboard" component={Dashboard} />
            <AuthenticatedRoute path="/addBills" component={AddBills} />






      </Switch>


   </Router>
  );
}

export default App;
