import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlasses, faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import NavigationMenu from "./Home/NavigationMenu";
import SideBar from "./Home/SideBar";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    var path = pathname.split('/'); 
    var currentPage = path[path.length - 1];
    var previousPage = path[path.length - 2];
    return (
        <div className={`courses ${currentPage === 'Home' ? 'home-resizing' : ''} ${currentPage === 'Chevron' ? 'home-chevron' : ''} ${currentPage === 'Bars' ? 'home-bars' : ''}`} >
            <div className="kanbas-navigation-toggle">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faBars} className="kanbas-navigation-toggle-sidebar align-self-center" />
                        <nav aria-label="breadcrumb" className="kanbas-navigation-toggle-breadcrumb align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} >
                                        {course.number} {course.name}
                                    </Link>
                                </li>
                                <li className={`breadcrumb-item ${previousPage === 'Assignments' ? '' : 'hide-assignments'}`} >
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Assignments`} >
                                        Assignments
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {currentPage}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <button type="button" className="btn btn-light align-self-center">
                        <FontAwesomeIcon icon={faGlasses} className="icon-margin-small" />
                        Student View
                    </button>
                </div>
                <hr />
            </div>
            <div className="kanbas-navigation-toggle-narrow justify-content-between">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home/Sidebar`} className="align-self-center" >
                    <FontAwesomeIcon icon={faBars} className="kanbas-navigation-toggle-sidebar-narrow" />
                </Link>
                <div className="align-self-center kanbas-navigation-toggle-narrow-title">
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} >
                        {course.number} {course.name}
                    </Link>
                    <div>
                        Home
                    </div>
                </div>
                <div className="d-flex flex-row align-self-center">
                    <FontAwesomeIcon icon={faGlasses} className="icon-margin-big align-self-center kanbas-navigation-toggle-icon-narrow" />
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home/NavigationMenu`} className="home-chevron-icon" >
                        <FontAwesomeIcon icon={faChevronDown} className="align-self-center kanbas-navigation-toggle-icon-narrow" />
                    </Link>
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`} className="home-chevron-x-icon" >
                        <FontAwesomeIcon icon={faX} className="align-self-center kanbas-navigation-toggle-icon-narrow" />
                    </Link>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="course-navigation">
                    <CourseNavigation />
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Home/NavigationMenu" element={<NavigationMenu />} />
                    <Route path="Home/Sidebar" element={<SideBar />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div >
    );
}
export default Courses;