// import CourseCard from "./CourseCard";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";
import {FaEllipsisV, FaPencilAlt} from "react-icons/fa";
import {Link} from "react-router-dom";


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    return (
        <div className="dashboard">
             <div className="kanbas-navigation-toggle">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            </div>
            <div className="course-input-row">
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button className="btn btn-success" onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-primary" onClick={updateCourse} >
                    Update
                </button>
                <hr />
            </div>

            <div className="dashboard-main-content">
                <hr />
                <h2>
                    Published Courses ({courses.length})
                </h2>
                <hr />

                <div className="dashboard-card-box">
                    <div className="d-flex flex-row flex-wrap">
                    {courses.map((course) => {
                    return (
                        <div className="col">
                        <div className="card shadow-sm">
                        
                                    <div className="card-img-top wd-course-solid-blue wd-course-img-height-125px d-flex flex-row">
                                        <button type="button"
                                                className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
                                            <FaEllipsisV />
                                        </button>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
                                        <div className="wd-course-card-header-content-container">
                                        <h6 className="card-title wd-ellipsis">
                                            {course.name}
                                        </h6>
                                        <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                                        <p className="card-text wd-ellipsis">
                                            {course.startDate} <br/>
                                            {course.endDate}
                                        </p>
                                        </div>
                                    </Link>
                                                                    <Link key={course.number} to={"/Kanbas/Dashboard"} class="wd-course-card-icon-grey">
                                            <button
                                                className="btn btn-danger" 
                                                onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course);
                                                }}>
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-success" 
                                                onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                                }}>
                                                Edit
                                            </button>
                                            </Link>

                                    </div>
                                </div>
                            </div>

                        )
                    }
                    )}
                </div>
            </div>
</div>
       </div>
    );
}
export default Dashboard;