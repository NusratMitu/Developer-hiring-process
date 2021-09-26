import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';

const Employee = (props) => {
    const {name, img, salary, skill, designation, contactNo,mail} = props.employee;
    return (
        <div className="employee">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="employee-info">
                <h2 className="employee-name">{name}</h2>
                <p className="designation">{designation} ({skill})</p>
                
                <p> ${salary}</p>
                <p><FontAwesomeIcon icon={faPhoneAlt}/>  {contactNo}</p>
                <p><FontAwesomeIcon icon={faEnvelope}/>      {mail}</p>
                <button className="hire-btn"
                onClick={() => props.handleHireBtn(props.employee)} >Hire Now </button>
                <br />
                
              
            </div>
        </div>
    );
};

export default Employee;