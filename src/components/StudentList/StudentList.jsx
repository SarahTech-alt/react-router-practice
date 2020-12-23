import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './StudentList.css';

/*
YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
*/

function StudentList({ studentList }) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Github Name</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return(
                            <tr key={student.id}>
                                <td>
                                    {student.github_name}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
    
}

// PropTypes is an optional library that helps developers.
// This will tell the parent component what functions it must implement to 
// use this component. And it throws an error that is easy to find for a developer if they forget it.
StudentList.propTypes = {
    studentList: PropTypes.array.isRequired,
};

export default StudentList;
