import axios from "axios";
import { Action } from "../../state/action";
import { employee } from "../../state/employeeReducer";

const baseUrl = 'https://employeapi.herokuapp.com';

export const requestGetEmployee = () =>axios.get<employee[]>(`${baseUrl}/api/employees`);

export const requestDeleteEmployee =(action:Action)=>axios.delete(`${baseUrl}/api/employees/${action.payload}`)

export const requestAddEmployee =(action:Action)=>axios.post(`${baseUrl}/api/employees`,action.payload)


export const requestUpdateEmployee =(action:Action)=>{
const act = Object.values(action.payload)
axios.put(`${baseUrl}/api/employees/${act[0]}`,act[1])
}