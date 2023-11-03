import React from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import "./ModuleList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCaretDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const modulesForCurrentCourse = modules.filter((mod) => mod.course === courseId);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="module-list">
      <div className="flex-row-container">
        <input className="form-control small-margin-bottom input-textarea-same-size" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
        <textarea className="form-control small-margin-bottom input-textarea-same-size" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
        <button className="btn btn-primary small-margin-bottom" onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <button className="btn btn-success icon-margin-small small-margin-bottom" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
      </div>
     
      {modulesForCurrentCourse.map((module, index) => (
        <ul key={index} className="list-group">
          <li className="list-group-item list-group-item-secondary courses-home-module-list-item">
            <div className="d-flex flex-row align-items-center">
              <div>{module.name}</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <button className="btn btn-success icon-margin-small" onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </div>
          </li>
          <li className="list-group-item courses-home-module-list-item">
            <div className="d-flex flex-row align-items-center">
              <div>{module.description}</div>
            </div>
          </li>
        </ul>
      ))} 
    

    </div>
  );
}

export default ModuleList;
