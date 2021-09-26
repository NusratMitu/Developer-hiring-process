import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Home.css';
const Home = () => {
    const [employees, setEmployees] =useState([]);
    useEffect( () =>{
        fetch('./employees.JSON')
        .then(res => res.json())
        .then( data => setEmployees(data))
    },[] );
    return (
        <div className="home-container">
            <div className="employees-container">
                {
                    employees.map( employee => <Employee
                    employee = {employee}>
                    </Employee>)
                    
                }
            </div>
            <div className="hire-container">
                <h2>hire</h2>
            </div>
        </div>
    );
};

export default Home;