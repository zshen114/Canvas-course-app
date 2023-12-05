import React, {useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css"
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment, setAssignments,
} from "../assignmentsReducer";
import {findAssignmentsForCourse} from "../client";
import * as client from '../client';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    useEffect(() => {
        findAssignmentsForCourse(courseId)
            .then((assignments) =>
                {
                    const target = assignments.find((elem) => elem._id === assignmentId);
                    dispatch(setAssignment(target));
                }
            );
    }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
      if (assignmentId === 'New') {
          client.createAssignment(courseId, assignment)
              .then(() => {
                  navigate(`/Kanbas/Courses/${courseId}/Assignments`);
              })
      } else {
          client.updateAssignment(assignment)
              .then(() => {
                  dispatch(updateAssignment(assignment));
                  navigate(`/Kanbas/Courses/${courseId}/Assignments`);
              });
      }

  };


  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2"
             onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
      />
      <textarea className="form-control"
                onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
                value={assignment?.description}
      >
      </textarea>

      <div className="row">
        <div className="col">
          <div className="float-end my-2">Due</div>
        </div>
        <div className="col">
          <input type="date"
                 value={assignment?.dueDate}
                 className="form-control w-50"
                 onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="float-end my-2">Available From</div>
        </div>
        <div className="col">
          <input type="date"
                 value={assignment?.availiableFrom}
                 className="form-control w-50"
                 onChange={(e) => dispatch(setAssignment({ ...assignment, availiableFrom: e.target.value }))}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="float-end my-2">Available To</div>
        </div>
        <div className="col">
          <input type="date"
                 value={assignment?.avaliableTo}
                 className="form-control w-50"
                 onChange={(e) => dispatch(setAssignment({ ...assignment, avaliableTo: e.target.value }))}
          />
        </div>
      </div>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;