import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCaretDown, faCircleCheck, faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="assignments">
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Assignment"
        />
        <div className="assignments-buttons">
          <button className="btn btn-light assignments-button">
            <FontAwesomeIcon icon={faPlus} className="icon-margin" />
            Group
          </button>
          <button className="btn btn-danger assignments-button">
            <FontAwesomeIcon icon={faPlus} className="icon-margin" />
            Assignment
          </button>
          <button className="btn btn-light assignments-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
      <hr />
      <div className="assignment-list">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary courses-assignment-list-item">
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faEllipsisVertical} />
              <FontAwesomeIcon icon={faEllipsisVertical} className="icon-margin-small" />
              <FontAwesomeIcon icon={faCaretDown} className="icon-margin-small" />
              <div className="assignments-text">Assignments</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <button className="btn rounded-pill assignments-title-total icon-margin">40% of Total</button>
              <FontAwesomeIcon icon={faPlus} className="icon-margin" />
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </li>
          {courseAssignments.map((assignment) => (
            <li className="list-group-item courses-assignment-list-item courses-assignments-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <FontAwesomeIcon icon={faEllipsisVertical} className="icon-margin" />
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "green" }} className="fa-regular icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due Sep 18 at 11:59am | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} className="icon-margin" />
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;