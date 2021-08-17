import React from 'react'
import './EmployeeDetails.css'

function EmployeeDetails() {
    return (
        <div className='emp'>

            <h1><u>EmployeeDetails</u></h1>

            <h5>First Name</h5>

            <input type='text' />

            <h5>Last Name</h5>

            <input type="text" />

            <h5>DOB</h5>

            <input type="date" />

            <h5>Designation</h5>

            <input type="text" />

            <h5>profile Photo</h5>

            <img className='img' src='https://images.unsplash.com/photo-1579256945823-f007794790df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' />

            <h5>Experience</h5>

            <input type='number' min='0' />
        </div>
    )
}

export default EmployeeDetails

