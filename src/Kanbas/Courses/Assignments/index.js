import React from "react";
import { useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "./deleteConfirm.js";

import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { findAssignmentsForCourse } from "./client";

function Assignments() {
  const { courseId } = useParams();
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({ name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15", });
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState({open: false});

  const navigate = useNavigate();
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);

  const setShowDeleteConfirmTrue = (assignment) => {
    dispatch(setAssignment(assignment));
    setShowDeleteConfirm({open: true});
  }

  const navigateToEdit = () => { navigate(`/Kanbas/Courses/${courseId}/Assignments/New`) };

  useEffect(() => {
    findAssignmentsForCourse(courseId)
        .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
  }, [courseId]);

  return (
      <div className="assignment-container">
        <DeleteConfirm state={showDeleteConfirm} setOpen={setShowDeleteConfirm} />
        
        
        <div className="assignment-actions">
          <input className="search-input" placeholder="Search for Assignments"></input>
          <div className="action-buttons">
          <button className="btn btn-light-gray btn-secondary add-group-btn"><AiOutlinePlus />Group</button>
            <button className="btn btn-danger add-assignment-btn" onClick={() => {
              dispatch(setAssignment(false));
              navigateToEdit();
            }}><AiOutlinePlus />Assignment</button>
           
          </div>
        </div>
        
        <div className="assignment-list">
          <h2 className="list-header">Assignments
          <button className="small-rounded-button">40% of Total</button>
          </h2>
          {courseAssignments.map((assignment) => (
              <div key={assignment._id} className="list-group-item">
                <h4>{assignment.title}</h4>
                Multiple Models
          
                <AiFillCheckCircle className="wd-assignment-check float-end" />
                <BsFillTrashFill onClick={() => setShowDeleteConfirmTrue(assignment)}
                                 className=" wd-assignment-trash float-end" />
                <AiFillEdit className=" wd-assignment-edit float-end"
                            onClick={() =>{
                                dispatch(setAssignment(assignment));
                                navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                }}/>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Assignments;
