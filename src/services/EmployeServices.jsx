import axios from "axios";

const EMPLOYEE_API_BASE = "http://localhost:8080/api/emps/";

function SaveEmployee(empData){
    return axios.post(EMPLOYEE_API_BASE , empData)
}

export default SaveEmployee