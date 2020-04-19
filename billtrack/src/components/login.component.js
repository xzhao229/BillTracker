import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import AuthenticationService from "../AuthenticationService";


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
                email:"",
                password:"",
                loginStatus:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }




    handleSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:8080/demo/signin", this.state)
               .then(response=>{
                        console.log("ok?")
                        console.log(response)
                            AuthenticationService
                            .executeBasicAuthenticationService(this.state.email, this.state.password)
                            .then(() => {
                                    AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
                                    this.setState({
                                        loginStatus:1
                                    })
                        })
               })

               .catch(error=>{
                        console.log(error.response.data);
                        var message = error.response.data;
                        if(message == "Wrong password") {
                            this.setState({
                                loginStatus:-2
                                });
                        } else if (message == "User not found") {
                            this.setState({
                                loginStatus:-3
                                });
                        } else {
                            this.setState({
                                loginStatus:-1
                            });
                        }
               })
    }
    render() {
        if(this.state.loginStatus == 1){
            alert("Successfully logged in!")
            return <Redirect to='/dashboard' />
        };
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <form>
                        <h3>Sign In</h3>
                        <div className='alert alert-danger' style={{display:this.state.error === -1 ? '' : 'none'}}>
                            Unknown error, please try again.
                        </div>

                        <div className='alert alert-danger' style={{display:this.state.loginStatus === -2 ? '' : 'none'}}>
                            Your login credentials could not be verified, please try again.
                        </div>

                        <div className='alert alert-danger' style={{display:this.state.loginStatus === -3 ? '' : 'none'}}>
                            User not found, please try again.
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
