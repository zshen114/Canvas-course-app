import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCaretDown, faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <div className="module-list">
      {modules.map((module, index) => (
        <ul key={index} className="list-group">
          <li className="list-group-item list-group-item-secondary courses-home-module-list-item">
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faEllipsisVertical} />
              <FontAwesomeIcon icon={faEllipsisVertical} className="icon-margin-small" />
              <FontAwesomeIcon icon={faCaretDown} className="icon-margin" />
              <div>{module.name}</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} className="icon-margin-small" />
              <FontAwesomeIcon icon={faCaretDown} style={{ color: "black" }} className="icon-margin" />
              <FontAwesomeIcon icon={faPlus} className="icon-margin" />
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </li>         
        </ul>
      ))}
    </div>
  );
}

export default ModuleList;