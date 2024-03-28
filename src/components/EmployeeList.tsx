import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css"

    type Props = {
        list: IEmployee[];
    }
const EmployeeList = (props: Props) => {
    const{ list } = props;
    return <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
    {list.map((employeeList) => {
        console.log(employeeList);
        return(
            <tr key={employeeList.id}>
                <td>{employeeList.firstName} {employeeList.lastName}</td>
                <td>{employeeList.email}</td>
                <td>
                    <div>
                        <input type="button" value="View"/>
                        <input type="button" value="Edit"/>
                        <input type="button" value="Delete"/>                    
                    </div>
                </td>
            </tr>
        )
    })}
 
  </table>
};

export default EmployeeList;