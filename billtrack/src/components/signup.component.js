import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class SignUp extends Component {

    constructor(props){
            super(props);
            this.state = {
                    username:"",
                    email:"",
                    password:"",
                    signedUp: false
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

            var signupInfo = {
                username: this.state.username,
                email: this.state.email,
                password:this.state.password
            }

            axios.post("http://localhost:8080/demo/signup", signupInfo)
                  .then((response) => {
                    console.log(response)
                    if(response.status == 200){
                        if (response.data == "Email exists") {
                            alert("Email already exists, try log in or use another email")
                        } else {
                            this.setState({signedUp: true});
                        }
                    }
                  })

        }


    render() {
        if(this.state.signedUp){
            alert("Successfully signed up!")
            return <Redirect to='/sign-in' />
        };
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" onChange={this.handleChange} placeholder="User Name" />
                </div>



                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}> sign in?</Link>
                </p>

            </form>

        );
    }
}