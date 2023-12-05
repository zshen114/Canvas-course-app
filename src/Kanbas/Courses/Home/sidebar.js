import React from 'react';
import { FaFileImport, FaRegCircle, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell, FaCalendar } from 'react-icons/fa';
import "./sidebar.css"
function SidebarItem({ icon, label }) {
    return (
        <div className="sidebar-item">
            <div className="icon">{icon}</div>
            <span>{label}</span>
        </div>
    );
}

function TodoItem({ label, points, date }) {
    return (
        <div className="todo-item">
            <div className="circle"><FaRegCircle /></div>
            <div className="todo-content">
                <div>{label}</div>
                <div>{points} • {date}</div>
            </div>
        </div>
    );
}


function Sidebar() {
    return (
      <div className="sidebar">
         <SidebarItem icon={<FaFileImport />} label="Import Existing Content" />
            <SidebarItem icon={<FaFileImport />} label="Import from Commons" />
            <SidebarItem icon={<FaHome />} label="Choose Home Page" />
            <SidebarItem icon={<FaStream />} label="View Course Stream" />
            <SidebarItem icon={<FaBullhorn />} label="New Announcement" />
            <SidebarItem icon={<FaChartBar />} label="New Analytics" />
            <SidebarItem icon={<FaBell />} label="View Course Notifications" />
        <h5>To Do</h5>
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
            
            <a href="#">
              View Calendar
            </a>
          </div>
        </div>
        <hr />
        <div className="courses-home-main-content-right-side-coming-up-list-item">
        <SidebarItem icon={<FaCalendar />} />
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
        <SidebarItem icon={<FaCalendar />} />
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
        <SidebarItem icon={<FaCalendar />} />
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

export default Sidebar;