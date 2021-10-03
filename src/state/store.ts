import { createStore, applyMiddleware } from "redux"
import { employeeReducer } from "./employeeReducer";
import  rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(employeeReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
