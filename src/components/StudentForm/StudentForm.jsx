import React, { useState } from 'react';


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
        setStudent({githubName : ''});
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent({githubName: event.target.value})} 
                    placeholder="GitHub username"
                    value={student} />
            <input type="submit" value="Submit" />
        </form>
    );
    
}



export default StudentForm;
