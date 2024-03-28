import { useState } from "react";
import "./EmployeeForm.style.css"
import { IEmployee } from "./Employee.type";
type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail] = useState("");

    const onFirstNameChangedHnd = (e:any) => {
        setFirstName (e.target.value);
    }
    const onSecondNameChanged = (e:any) =>{
        setLastName(e.target.value)
    }
    const onEmailChanged = (e:any) =>{
        setEmail(e.target.value)
    }
    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onSubmitBtnClickHnd = (e:any)=> {
        console.log ('working');
        e.preventDefault();
        const data: IEmployee ={
            id: new Date().toJSON().toString(),
            firstName:firstName,
            lastName:lastName,
            email:email
        }

        onSubmitClickHnd(data);

    }
  return (
    <>
    
        <div className="form-container">
          <div>
            <h1>Add Employee Form</h1>
          </div>
          <form onSubmit={onSubmitBtnClickHnd}>
          <div>
            <label>First Name : </label>
            <input type="text" onChange={onFirstNameChangedHnd}/>
          </div>
          <div>
            <label>Last Name : </label>
            <input type="text" onChange={onSecondNameChanged}/>
          </div>
          <div>
            <label>Email : </label>
            <input type="text" onChange={onEmailChanged}/>
          </div>
          <div>
            <input type="button" value="Back" onClick={onBackBtnClickHnd} />
            <input type="submit" value="Add Employee" />
          </div>
          </form>
        </div>
    </>
  );
};

export default AddEmployee;
