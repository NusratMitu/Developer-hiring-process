import React from 'react';
import './Employee.css'
const Employee = (props) => {
    const {name, img, salary} = props.employee;
    return (
        <div className="employee">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="employee-info">
                <h2 className="employee-name">{name}</h2>
                <p>Salary: {salary}</p>
                <button className="hire-btn"
                onClick={() => props.handleHireBtn(props.employee)} > Hire</button>
            </div>
        </div>
    );
};

export default Employee;