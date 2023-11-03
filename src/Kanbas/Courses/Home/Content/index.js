import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faBan,
  faCircleCheck,
  faFileImport,
  faArrowRightFromBracket,
  faBullseye,
  faChartSimple,
  faBullhorn,
  faCalendarAlt,
  faBell,
  faLifeRing,
  faFileExport,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import "./index.css";

function Content() {
  return (
    <div className="content">
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faExternalLink} /> Import Existing Content
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faFileImport} /> Import from Commons
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faLifeRing} /> Choose Home Page
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faChartSimple} /> View Course Stream
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faBullhorn} /> New Announcement
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faChartSimple} /> New Analytics
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faBell} /> View Course Notifications
      </button>
      <div className="courses-home-main-content-right-side-title">To Do</div>
      <hr />
      <div className="courses-home-main-content-right-side-todo-list-item">
        <div className="courses-home-main-content-right-side-todo-list-item-description">
          <a href="#">
            Grade A1 - ENV + HTML
          </a>
          <div>
            100 points Sep 18 at 11:59pm
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-title">
        <div>
          Coming Up
        </div>
        <div className="courses-home-main-content-right-side-coming-up-title-item ms-auto p-2">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <a href="#">
            View Calendar
          </a>
        </div>
      </div>
      <hr />
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 11:45am
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            CS5610 06 SP23 Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 6pm
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            <span>
              CS5610 Web Development
            </span>
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 7pm
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <a href="#">
          12 more in the next ...
        </a>
      </div>
    </div>
  );
}

export default Content;