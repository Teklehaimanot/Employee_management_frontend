import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { employeeDelete } from '../state/action'
import { employee } from '../state/employeeReducer'
import PopUp from './PopUp'
interface Props {
    employee: employee,
}

const Employee: React.FC<Props> = ({ employee }) => {
    const [togglePupup, setSettogglePup] = useState(false)
    const dispatch = useDispatch()
    const deleteEmployee = (id: number) => {
        dispatch(employeeDelete(id))
    }

    const handlePoupup = () => {
        setSettogglePup(!togglePupup)
    }
    return (
        <div className='task' onDoubleClick ={handlePoupup}  >

            <h3 >{employee.name}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteEmployee(employee._id)}
                />
            </h3>
            <div className='task-employee'>
                <span>  {employee.dateOfBirth}</span>
                <span> {employee.gender}</span>
                <span> ${employee.salary}</span>
            </div>
            {
                togglePupup ? (
                    <PopUp Employee = {employee} TogglePupUp = {()=>setSettogglePup(false)}/>
                ) : ''
            }

        </div>
    )
}

export default Employee
