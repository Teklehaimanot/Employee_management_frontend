import { useState } from "react"
import { useDispatch } from "react-redux"
import { employeeUpdate } from "../state/action"
import { employee } from "../state/employeeReducer"

interface Props {
    Employee: employee,
    TogglePupUp: () => void
}


const PopUp: React.FC<Props> = ({ Employee, TogglePupUp }) => {

    const [name, setName] = useState(Employee.name)
    const [dateOfBirth, setDateOfBirth] = useState(Employee.dateOfBirth)
    const [gender, setGender] = useState(Employee.gender)
    const [salary, setSalary] = useState(Employee.salary)
    const _id = Employee._id
    const dispatch = useDispatch()
    const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !dateOfBirth || !gender || !salary) {
            alert('error please fill all fields!')
            return
        }
        if (typeof (salary) !== 'number') {
            alert('error please enter your salary in number format')
            return
        }
        updateEmployee(_id, { _id, name, dateOfBirth, gender, salary });
        TogglePupUp()


    }

    const updateEmployee = (id: number, emp: employee) => {
        dispatch(employeeUpdate(id, emp))
    }
    return (
        <div className="edit-form" >

            <form className="add-for" onSubmit={submitEmployee} >
                <div className="form-control">
                    <input
                        type='text'
                        placeholder='Add Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type='text'
                        placeholder='dd-mm-year'
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type='text'
                        placeholder='Add Gender'
                        value={gender}
                        onChange={(e) => { setGender(e.target.value) }}
                    />
                </div>

                <div className="form-control">
                    <input type='text'
                        placeholder='Add Salary'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
                <input type="submit" value="Save Employee" className="btn btn-block" />
            </form>
        </div>
    )
}

export default PopUp
