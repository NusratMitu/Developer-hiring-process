import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Hired from '../Hired/Hired';
import './Home.css';
const Home = () => {
    const [employees, setEmployees] =useState([]);
    const [ hire, setHire] = useState([]);
    useEffect( () =>{
        fetch('./employees.JSON')
        .then(res => res.json())
        .then( data => setEmployees(data))
    },[] );
    const handleHireBtn = (employee) => {
        const newHire = [...hire, employee];
        setHire(newHire);
    }
    return (
        <div className="home-container">
            <div className="employees-container">
                {
                    employees.map( employee => <Employee
                    employee = {employee}
                    handleHireBtn= {handleHireBtn}>
                    </Employee>)  
                }
            </div>
            <div className="hire-container">
                <Hired hire={hire}></Hired>
            </div>
        </div>
    );
};

export default Home;