import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { Action, employeeSet } from "../../state/action";
import { employee } from "../../state/employeeReducer";
import { requestAddEmployee, requestDeleteEmployee, requestGetEmployee, requestUpdateEmployee } from "../requests/employee";

export function* handleGetEmployee() {
    try {
        const response: AxiosResponse<employee[]> = yield call(requestGetEmployee)
        yield put(employeeSet(response.data));
    } catch (error) {
        console.log(error);
    }
}


export function* handleDeleteEmployee(action: Action) {
    try {
        const count: string = yield call(requestDeleteEmployee, action)
        if (!count) throw new Error('API delete request failed')
    } catch (error) {
        console.log(error);
    }
}


export function* handleAddEmployee(action: Action) {
    try {
        const response: AxiosResponse<employee> = yield call(requestAddEmployee, action)
        if (!response) throw new Error('API post request failed')
        yield put({ type: 'Get_Employee' });

    } catch (error) {
        console.log(error);
    }
}

  export function* handleUpdateEmployee(action:Action) {
    try {
      yield call(requestUpdateEmployee,action)
    } catch (error) {
      console.log(error);
    }
  }