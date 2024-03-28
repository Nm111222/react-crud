import { useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
const Home =() => {

    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const onAddEmployeeClickHnd = () =>{ setShownPage(PageEnum.add);
    }
    const showListPage =() =>{
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee ) => {
        console.log(data);
        setEmployeeList([...employeeList, data]);
        showListPage();
    }
    return (
        <>
        <article className="article-header">
            <header>
                <h1>Simple Crud Application</h1>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && (
                <>
                <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd}/>
                <EmployeeList list={employeeList}/>    
                </>
            )}

            {shownPage === PageEnum.add && <AddEmployee  onSubmitClickHnd={addEmployee} onBackBtnClickHnd={showListPage}/>}
        
        </section>

        </>
    );
}

export default Home;