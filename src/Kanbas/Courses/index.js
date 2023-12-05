import db from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams } from "react-router-dom";
import "./index.css"
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import React, { useState,useEffect } from "react";
import axios from "axios";

function Courses() {

    const { courseId } = useParams();
    const [course , setCourse] = useState({});
    const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
    const URL = `${BASE}/api/courses`;

    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    const url = window.location.href;
    const afterLastSlash = url.substring(url.lastIndexOf('/') + 1);
    const result = afterLastSlash.split('%')[0];
    return (
        <div>
        <div className="navbar">
            <div className="menu-container">
                <div className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="course-code">Course {course.name}</div>
                <span></span>
                <div className="course-code"> {`>${result}`}</div>
            </div>
        </div>
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "90px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>

    );
}
export default Courses;