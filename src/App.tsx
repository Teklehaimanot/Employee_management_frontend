import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import { GetEmployee } from './state/action';
import { employeeState } from './state/employeeReducer';
const App: React.FC = () => {

  
  const employee = useSelector<employeeState, employeeState['employees']>(state => state.employees)
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const dispatch = useDispatch()

  const toggleAddEmployee = () => {
    setShowAddEmployee(!showAddEmployee);
  }

  useEffect(() => {
    dispatch(GetEmployee());
  }, [dispatch]);

  return (
    <div className="container">

      <Header onToggle={toggleAddEmployee} showAdd={showAddEmployee} />
      <>
        {showAddEmployee ? (
          <AddEmployee />
        ) : ''}
      </>
      {employee.length ?
        <EmployeeList  employees={employee} /> : 'No Employee to show'}

    </div>


  );
}

export default App;
