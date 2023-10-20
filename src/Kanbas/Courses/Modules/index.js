import ModuleList from "./ModuleList";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Modules() {
  return (
    <div className="modules">
      <div className="courses-home-module-buttons">
        <button className="btn btn-light courses-home-module-button">
          Collapse All
        </button>
        <button className="btn btn-light courses-home-module-button">
          View Progress
        </button>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle courses-home-module-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleCheck} className="circle-check-icon" />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Week 0 - INTRO</a></li>
            <li><a className="dropdown-item" href="#">Week 1 - HTML</a></li>
            <li><a className="dropdown-item" href="#">Week 2 - CSS</a></li>
          </ul>
        </div>
        <button className="btn btn-danger courses-home-module-button">
          <FontAwesomeIcon icon={faPlus} />
          Module
        </button>
        <button className="btn btn-light courses-home-module-button">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
      <hr />
      <div className="courses-home-module-lists">
        <ModuleList />
      </div>
    </div>
  );
}

export default Modules;