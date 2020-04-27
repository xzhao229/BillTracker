import axios from "axios";


export default function updateBills(data) {

    const billInfo = {
        id: data.id,
        name: data.name,
        category: data.category,
        value: data.value,
        description: data.description,
        dueDate:data.dueDate,
    }

    axios.put("http://localhost:8080/demo/updateBills", billInfo)
        .then((response) => {
        })
        .catch(err =>{
            console.log(err.response.data);
        })

}