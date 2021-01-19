import './StudentList.css';


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

export default StudentList;
