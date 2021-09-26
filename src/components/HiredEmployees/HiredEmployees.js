import React from 'react';
import './HiredEmployees.css';
const HiredEmployess = (props) => {
    // console.log(props.hiredEmployee);
    const {hiredEmployee} = props;
    return (
        <div className="hired-employees">
            <img src={hiredEmployee.img} alt="" />
            <h3>{hiredEmployee.name}</h3>
        </div>
    );
};

export default HiredEmployess;