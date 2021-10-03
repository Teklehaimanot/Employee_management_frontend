import { employee } from "./employeeReducer";
interface update{
id: number,
emp:employee
}
interface AddAction {
    type: 'Add_Employee',
    payload: employee
}
interface UpdateAction {
    type: 'Update_Employee',
    payload: update
   

}
interface DeleteAction {
    type: 'Delete_Employee',
    payload: number
}
interface SetAction {
    type: 'Set_Employee',
    payload: employee[]
}
interface GetAction {
    type: 'Get_Employee',
    payload: employee[]
}


export type Action = AddAction | DeleteAction | SetAction | GetAction | UpdateAction

export const employeeAdd = (emp: employee): Action => (
    {
        type: "Add_Employee",
        payload: emp
    }
)
export const employeeUpdate = (id: number, emp: employee): Action => (
    {
        type: "Update_Employee",
        payload:{
           id:id,
           emp:emp
        }
       


    }
)
export const employeeDelete = (id: number): Action => (
    {
        type: "Delete_Employee",
        payload: id
    }
)

export const employeeSet = (emps: employee[]): Action => (
    {
        type: "Set_Employee",
        payload: emps
    }

)

export const GetEmployee = () => ({
    type: "Get_Employee"
});
