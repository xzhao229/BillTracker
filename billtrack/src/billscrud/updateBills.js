import axios from "axios";
import { BACKEND_ENDPOINT} from "../AuthenticationService";


export default function updateBills(data) {

    const billInfo = {
        id: data.id,
        name: data.name,
        category: data.category,
        value: data.value,
        description: data.description,
        dueDate:data.dueDate,
    }

    axios.put( BACKEND_ENDPOINT + "/demo/updateBills", billInfo)
        .then((response) => {
        })
        .catch(err =>{
            console.log(err.response.data);
        })

}