import React, {useState, useEffect, Component} from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../AuthenticationService";
import axios from "axios";


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            bills:"",
            error: ""
        };
    }

    componentDidMount() {
        this.getBills()
    }

    getBills() {
        let userInfo = {
            params: {
                email: sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
            }
        }
        axios.get("http://localhost:8080/demo/bills", userInfo)
            .then ((response) => {
                this.setState({bills: response.data});
                console.log(this.state.bills)

            })
            .catch(err =>{this.setState({error: err.response.data});
                console.log(err.response.data);
            })
        return
    }

    render() {
        return (
            <div>
                <div className="card mb-5">
                    <h3 className="card-header">User Information</h3>
                    <ul className="list-group">
                        <li className="list-group-item">username</li>
                        <li className="list-group-item">email</li>
                    </ul>
                </div>
                <div>
                    <Link type="button" className="btn btn-primary btn-lg" to="/addBills">Add Bills</Link>
                </div>

            </div>
        )
    }
}




export default Dashboard;
