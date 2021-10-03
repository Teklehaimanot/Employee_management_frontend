import { useState } from "react"
import { useDispatch } from "react-redux"
import { employeeAdd } from "../state/action"
import { employee } from "../state/employeeReducer"
import { v4 as uuidv4 } from 'uuid';

const AddEmployee: React.FC= () => {

    const  dispatch = useDispatch()
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [salary, setSalary] = useState('')
    const _id = parseInt(uuidv4()) ;

    const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !dateOfBirth || !gender || ! salary) {
            alert('please check all fields are not empty')
            return
        }
        addEmployee({_id,name, dateOfBirth, gender, salary});
        setName('');
        setDateOfBirth('');
        setGender('');
        setSalary('');

    }

    const addEmployee = (emp: employee) => {
        dispatch(employeeAdd(emp))
      }
    return (
        <form className="add-form" onSubmit = {submitEmployee} >
            <div className="form-control">
                <label>Name of Employee</label>
                <input
                    type='text'
                    placeholder='Add Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day of Birth</label>
                <input type='text'
                    placeholder='dd-mm-year'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Gender</label>
                <input type='text'
                    placeholder='Add Gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Salary</label>
                <input type='text'
                    placeholder='Add Salary'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </div>
            <input type="submit" value="Save Employee" className="btn btn-block" />
        </form>
    )
}

export default AddEmployee
