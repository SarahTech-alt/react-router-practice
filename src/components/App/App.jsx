import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';

function App() {

    let [studentList, setStudentList] = useState([]);

    //On Load, call server
    useEffect(() => {
        console.log('in useEffect')
        getStudents();
    }, [])


    // This function is called by the StudentForm when the submit button is pressed
    const addStudent = (newStudent) => {
        // POST your data here
        axios({
            method: 'POST',
            url: '/students',
            data: {github_name: newStudent.githubName}
        }).then((response) => {
            console.log(response);
            getStudents();
        }).catch((err) => {
            console.log(err);
        })
    }

    const getStudents = () => {
        axios({
            method: 'GET',
            url: '/students'
        }).then((response) => {
            setStudentList(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <StudentForm addStudent={addStudent}/>

            <p>Student list:</p>
            <StudentList studentList={studentList}/>
        </div>
    );

}

export default App;
