import React, {Component} from "react";
import axios from "axios";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../AuthenticationService";

class AddBills extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            category: "",
            value:"",
            description:"",
            dueDate:"",
            error: ""
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
        console.log(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME))

        event.preventDefault();

        let billInfo = {
            email:sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME),
            name: this.state.name,
            category: this.state.category,
            value:this.state.value,
            description:this.state.description,
            dueDate:this.state.dueDate
        }

        console.log(billInfo)

        axios.post("http://localhost:8080/demo/addBills", billInfo)
            .then((response) => {
                this.setState({billAdded: true});
            })
            .catch(err =>{this.setState({error: err.response.data});
                console.log(err.response.data);
            })
//
    }
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>

                        <h3>Add a Bill</h3>
                        {this.state.error &&
                        <div className='alert alert-danger' style={{display:this.state.error ? '' : 'none'}}>
                            {this.state.error}
                        </div>
                        }

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} placeholder="Bill Name" />
                        </div>


                        <div className="form-group">
                            <label>Category</label>
                            <input type="text" className="form-control" name="category" onChange={this.handleChange} placeholder="Ex: Utility" />

                        </div>

                        <div className="form-group">
                            <label>Value</label>
                            <input type="number" step="0.01" className="form-control" name="value" onChange={this.handleChange} placeholder="Enter bill amount" />
                        </div>

                        <div className="form-group">
                            <label>Due Date</label>
                            <input type="date" className="form-control" name="dueDate" onChange={this.handleChange} placeholder="Enter bill due date" />
                        </div>


                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" name="description" onChange={this.handleChange} placeholder="Bill Description" />

                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>

                    </form>
                </div>
            </div>
        )
    }
}




export default AddBills;