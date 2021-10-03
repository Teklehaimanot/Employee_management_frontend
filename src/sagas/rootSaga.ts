import { spawn,takeEvery,takeLatest } from "redux-saga/effects";
import { handleAddEmployee, handleDeleteEmployee, handleGetEmployee, handleUpdateEmployee } from "./handlers/employee";


function* watcherSaga() {
  yield takeLatest('Get_Employee', handleGetEmployee);
}


function* deleteSaga() {
    yield takeEvery('Delete_Employee',handleDeleteEmployee);
  }
function* postSaga(){
    yield takeEvery('Add_Employee',handleAddEmployee)
}

function* updateSaga(){
    yield takeEvery('Update_Employee',handleUpdateEmployee)
}

export default function* rootSaga() {
    yield spawn(watcherSaga)
    yield spawn(deleteSaga)
    yield spawn(postSaga)
    yield spawn(updateSaga)
  }