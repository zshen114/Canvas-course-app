import { Link } from "react-router-dom";
// import db from "../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { React } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
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
                        {courses.map((course) => (
                            <div className="dashboard-course-card">
                                <div className="course-card-image"></div>
                                <div className="dashboard-course-card-description">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} >
                                        {course.name}
                                    </Link>
                                    <div>{course.number}</div>
                                    <div>{course.startDate} to {course.endDate}</div>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <div>
                                        <button className="btn btn-success btn-sm small-margin-right"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
