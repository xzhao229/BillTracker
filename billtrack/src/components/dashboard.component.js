import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {USER_NAME_SESSION_ATTRIBUTE_NAME, BACKEND_ENDPOINT} from "../AuthenticationService";
import Layout from "./layout.component";
import axios from "axios";
import MaterialTable from 'material-table';
import addBills from '../billscrud/addBills';
import deleteBills from '../billscrud/deleteBills';
import updateBills from '../billscrud/updateBills'
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import StickyFooter from "./stickyfooter.component";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            bills: [],
            error: "",
            date: (new Date().getMonth()+1)+'-'+new Date().getDate(),
            column: [
                {
                    field: 'name',
                    title: 'Name',
                    editComponent: props => (
                        <TextField
                                {...props}
                                placeholder="Name"
                                value={props.value === undefined ? '' : props.value}
                                onChange={event => props.onChange(event.target.value)}
                                inputProps={{
                                    style: {
                                        fontSize: 13,
                                    }
                                }}
                                error={props.value === "" ? true :false}
                                helperText="*Required"
                        />
                    )
                },

                {
                    field: 'category',
                    title: 'Category',
                    editComponent: props => (
                        <TextField
                            {...props}
                            placeholder="amount"
                            value={props.value === undefined ? '' : props.value}
                            onChange={event => props.onChange(event.target.value)}
                            inputProps={{
                              style: {
                                fontSize: 13,
                                textAlign: "right"
                              }
                            }}
                            error={props.value === "" ? true :false}
                            helperText="*Required"
                        />
                    )
                },

                {
                    field: 'value',
                    title: 'Value',
                    type:"currency",
                    editComponent: props => (
                        <TextField
                                {...props}
                                placeholder="amount"
                                value={props.value === undefined ? '' : props.value}
                                onChange={event => props.onChange(event.target.value)}
                                inputProps={{
                                  style: {
                                    fontSize: 13,
                                  }
                                }}
                                error={props.value === "" ? true :false}
                                helperText="*Required"
                        />
                    )
                },

                {
                    field: 'dueDate',
                    title: 'Due Date',
                    type: 'date',
                    editComponent: props => (
                        <MuiPickersUtilsProvider utils={DateFnsUtils}
                            locale={props.dateTimePickerLocalization}>
                            <DatePicker
                                {...props}
                                format="MM.dd.yyyy"
                                value={props.value === undefined ? null : props.value}
                                onChange={props.onChange}
                                clearable
                                InputProps={{
                                    style: {
                                        fontSize: 13,
                                    }
                                }}
                                error={props.value === null ? true :false}
                                helperText="*Required"
                            />
                        </MuiPickersUtilsProvider>
                    )
                },
                {
                    field: 'description',
                    title: 'Description',
                },



                     ]
        };
        this.getBills = this.getBills.bind(this);
    }

    componentDidMount() {
        this.getBills()
    }

    validate(data){
        if (!("name" in data) || data.name === ""
        || !("value" in data) || data.value === ""
        || !("category" in data)|| data.category === ""
        || !("dueDate" in data) || data.dueDate === null || data.dueDate === ""){
            return false;
        }
        return true;
    }

    getBills() {
        let userInfo = {
            params: {
                email: sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
            }
        }
        axios.get(BACKEND_ENDPOINT + "/demo/bills", userInfo)
            .then ((response) => {
                this.setState({bills: response.data});
                return
            })
            .catch(err =>{this.setState({error: err.response.data});
                console.log(err.response.data);
            })
    }

    render() {
        return (
            <div>
                <Layout title = "Hello" date = {this.state.date} description="Here is the bill you need to pay in the future.">
                </Layout>
                    <MaterialTable
                          title="Current Bill"
                          columns={this.state.column}
                          data={query => new Promise((resolve, reject) => {
                               let userInfo = {
                                   params: {
                                       email: sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                                   }
                               }
                               axios.get(BACKEND_ENDPOINT + "/demo/bills", userInfo)
                                   .then ((response) => {
                                        resolve({
                                        data: response.data.slice(query.page * query.pageSize, (query.page + 1) * query.pageSize ),
                                        page: query.page,
                                        totalCount: response.data.length
                                        })
                                   })
                             })
                          }
                          editable={{
                            onRowAdd: (newData) =>
                              new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    if(this.validate(newData)){
                                         newData.dueDate = newData.dueDate.toLocaleDateString()
                                         addBills(newData)
                                         resolve();
                                    }
                                    else reject();

                                }, 600);
                              }),
                            onRowUpdate: (newData, oldData) =>
                              new Promise((resolve, reject) => {
                                setTimeout(() => {
                                  if (oldData) {
                                      if(this.validate(newData)){
                                          updateBills(newData)
                                          resolve();
                                      }
                                      else reject()

                                  }

                                }, 600);
                              }),
                            onRowDelete: (oldData) =>
                              new Promise((resolve) => {
                                setTimeout(() => {
                                  deleteBills(oldData)
                                  resolve();
                                }, 600);
                              }),
                          }}
                        />
            <StickyFooter/>
            </div>

        )
    }
}
export default Dashboard;
