import db from "../../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faFileExport, faCog, faFilter, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="grades table-responsive">
            <div className="grades-module-buttons">
                <button className="btn btn-light grades-module-button">
                    <FontAwesomeIcon icon={faFileImport} className="margin-icon-small" />
                    Import
                </button>
                <button className="btn btn-light grades-module-button">
                    <FontAwesomeIcon icon={faFileExport} flip="horizontal" className="margin-icon-small" />
                    Export
                </button>
                <button className="btn btn-light grades-module-button">
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
            <div>
                <div className="d-flex">
                    <div className="col assignment-edit-online-entry-text">Student Names</div>
                    <div className="col assignment-edit-online-entry-text">Assignment Names</div>
                </div>
                <div className="d-flex flex-row">
                    <select id="search-students" className="form-select">
                        <option selected>Search Students</option>
                    </select>
                    <select id="search-assignments" className="form-select">
                        <option selected>Search Assignments</option>
                    </select>
                </div>
            </div>
            <div className="mb-2">
                <button className="btn btn-light grades-module-button">
                    <FontAwesomeIcon icon={faFilter} className="margin-icon-small" />
                    Apply Filters
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (<th className="text-center">{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="text-red">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return grade ?
                                            (<td className="text-center">{grade.grade}</td>) :
                                            (<td className="text-center"></td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;