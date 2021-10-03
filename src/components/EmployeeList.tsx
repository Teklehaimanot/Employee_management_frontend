import { employee } from '../state/employeeReducer'
import Employee from './Employee'
interface Props {
    employees: employee[],
 

}
const EmployeeList: React.FC<Props> = ({ employees }) => {
    return (
        <>
            {
                employees.map(emp => (
                    <Employee  key = {emp._id} employee ={emp} />

                ))
            }
        </>
    )
}

export default EmployeeList
