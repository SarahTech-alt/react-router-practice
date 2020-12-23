import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
*/

function StudentForm({ addStudent }) {
    
    const [student, setStudent] = useState({ githubName: '' });

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent({});
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent({githubName: event.target.value})} 
                    placeholder="GitHub username" />
            <input type="submit" value="Submit" />
        </form>
    );
    
}

// PropTypes is an optional library that helps developers.
// This will tell the parent component what functions it must implement to 
// use this component. And it throws an error that is easy to find for a developer if they forget it.
StudentForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

export default StudentForm;
