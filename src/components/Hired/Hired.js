import React from 'react';
import HiredEmployess from '../HiredEmployees/HiredEmployees';
import './Hired.css'
const Hired = (props) => {
    const {hire} = props;
    console.log(props.hire);
    let total = 0;
    for (const employee of hire){
        total = total + employee.salary;
    }
    return (
        <div className="hire-details">
            <div className="style-payment">
            <h2 >Payment Summary</h2>
            <h3>Hired Developer: {props.hire.length}</h3>
            <h3>Total Payment: ${total}</h3>
            </div>
            {
                  hire.map( hiredEmployee => <HiredEmployess hiredEmployee= {hiredEmployee} ></HiredEmployess>)
            }
        </div>
    );
};

export default Hired;