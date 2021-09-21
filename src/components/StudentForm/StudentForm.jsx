import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function StudentForm() {
    
    const [student, setStudent] = useState('');

    // get use history to add to history, thereby
    // redirecting to another component
    const history = useHistory();

    // Called when the submit button is pressed
    const addStudent = (newStudent) => {
        // POST student to the server
        axios({
            method: 'POST',
            url: '/students',
            data: {github_name: newStudent}
        }).then((response) => {
            console.log(response);
            // on success response direct to 
            // student list page
            history.push('/StudentList')
        }).catch((err) => {
            console.log(err);
        });
    };

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent(event.target.value)} 
                    placeholder="GitHub username"
                    value={student} />
            <input type="submit" value="Submit" />
        </form>
    );
    
}



export default StudentForm;
