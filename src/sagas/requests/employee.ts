import axios from "axios";
import { Action } from "../../state/action";
import { employee } from "../../state/employeeReducer";

const baseUrl = process.env.BASE_URL;

export const requestGetEmployee = () =>axios.get<employee[]>(`${baseUrl}/api/employees`);

export const requestDeleteEmployee =(action:Action)=>axios.delete(`${baseUrl}/api/employees/${action.payload}`)

export const requestAddEmployee =(action:Action)=>axios.post(`${baseUrl}/`,action.payload)


export const requestUpdateEmployee =(action:Action)=>{
const act = Object.values(action.payload)
axios.put(`${baseUrl}/${act[0]}`,act[1])
}