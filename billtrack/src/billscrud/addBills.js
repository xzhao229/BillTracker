import axios from "axios";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../AuthenticationService";

export default function addBills(data) {

    const billInfo = {
        email:sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME),
        name: data.name,
        category: data.category,
        value: data.value,
        description: data.description,
        dueDate:data.dueDate,
    }

    axios.post("http://localhost:8080/demo/addBills", billInfo)
        .then((response) => {
        })
        .catch(err =>{
            console.log(err.response.data);
        })
}