import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from '../About/AboutPage.js'

function App() {
    return (
        <Router>

            <ul className="nav">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/StudentList">All Students</Link>
                </li>
            </ul>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">GitHub Student List</h1>
                </header>
                <br />
                <Route path='/home'>
                    <StudentForm />
                </Route>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/StudentList'>
                    <p>Student list:</p>
                    <StudentList />
                </Route>
            </div>
        </Router>
    );
}

export default App;
