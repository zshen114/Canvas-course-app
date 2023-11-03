import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import db from "../../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCaretDown, faCircleCheck, faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
} from "./assignmentsReducer";
import DeleteConfirmation from "./DeleteConfirmation";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignmentsForCurrentCourse = assignments.filter((ass) => ass.course === courseId);
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    const newAssignment = {
      title: "New Assingment",
      description: "New Assignment Description",
      course: courseId,
      _id: new Date().getTime().toString(),
    };
    dispatch(setAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${newAssignment._id}`);
  }

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const handleDeleteConfirmation = (assignmentId) => {
    setDeleteConfirmation(assignmentId);
  };
  const handleDeleteAssignment = () => {
    if (deleteConfirmation) {
      dispatch(deleteAssignment(deleteConfirmation));
      setDeleteConfirmation(null);
    }
  };

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
          <button className="btn btn-danger assignments-button" onClick={handleAddAssignment}>
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
          {assignmentsForCurrentCourse.map((assignment) => (
            <li className="list-group-item courses-assignment-list-item courses-assignments-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <FontAwesomeIcon icon={faEllipsisVertical} className="icon-margin" />
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "green" }} className="fa-regular icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={assignment._id} onClick={() => dispatch(setAssignment(assignment))}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due {assignment.dueDate} at 11:59am | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <button className="btn btn-danger icon-margin" onClick={() => handleDeleteConfirmation(assignment._id)}>
                  Delete
                </button>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} className="icon-margin" />
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {deleteConfirmation && (
        <div className="delete-confirmation-overlay">
          <DeleteConfirmation
            onCancel={() => setDeleteConfirmation(null)}
            onConfirm={handleDeleteAssignment}
          />
        </div>
      )}
    </div>
  );
}
export default Assignments;