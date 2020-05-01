import axios from "axios";
import {USER_NAME_SESSION_ATTRIBUTE_NAME, BACKEND_ENDPOINT} from "../AuthenticationService";

export default function deleteBills(data) {
    const billInfo = {
        email:sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME),
        name: data.name,
        category: data.category,
        value: data.value,
        description: data.description,
        dueDate:data.dueDate,
        id:data.id
    }

    axios.delete(BACKEND_ENDPOINT + "/demo/deleteBills", {params:billInfo})
        .then((response) => {
        })
        .catch(err =>{
            console.log(err.response.data);
        })

}