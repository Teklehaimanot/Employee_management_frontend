import { Action } from "./action"

export interface employee {
    _id: number;
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: string ;
}

export interface employeeState {
    employees: employee[]
}


const initialstate = {
    employees: []
}

export const employeeReducer = (state: employeeState = initialstate, action: Action) => {
    switch (action.type) {

        case 'Add_Employee': {
            return { ...state, employees: [...state.employees, action.payload] }
        }
        case 'Update_Employee': {
            return {
                ...state, employees: [...state.employees.map(emp => emp._id === action.payload.id? {
                    ...emp, 
                    name: action.payload.emp.name,
                    dateOfBirth: action.payload.emp.dateOfBirth,
                    gender: action.payload.emp.gender,
                    salary: action.payload.emp.salary
                } : emp)]
            }
        }
        case 'Delete_Employee': {
            return { ...state, employees: [...state.employees.filter(emp => emp._id !== action.payload)] }
        }
        case 'Set_Employee': {
            return { ...state, employees: action.payload }
        }

        default:
            return state

    }

}