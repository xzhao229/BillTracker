import axios from "axios";
import {USER_NAME_SESSION_ATTRIBUTE_NAME, BACKEND_ENDPOINT} from "../AuthenticationService";

export default function addBills(data) {

    const billInfo = {
        email:sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME),
        name: data.name,
        category: data.category,
        value: data.value,
        description: data.description,
        dueDate:data.dueDate,
    }

    axios.post(BACKEND_ENDPOINT + "/demo/addBills", billInfo)
        .then((response) => {
        })
        .catch(err =>{
            console.log(err.response.data);
        })
}