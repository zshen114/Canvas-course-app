//import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "./index.css";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
   const { pathname } = useLocation();
   var path = pathname.split('/'); 
   var currentPage = path[path.length - 1];
   return (

      <div className="kanbas-app">
         <div className={`${currentPage === "Home" ? 'home-hidden-kanbas-navigation-side-bar' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-navigation-side-bar' : ''}`}>
            <KanbasNavigation />
         </div>
         <div className={`kanbas-layout-wrapper ${currentPage === "Home" ? 'home-hidden-kanbas-layout-wrapper' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-layout-wrapper' : ''}`}>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses" element={<h1>Courses</h1>} />
               <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
         </div>
      </div>
   );
}
export default Kanbas;