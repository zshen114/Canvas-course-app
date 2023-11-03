//import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "./index.css";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
   const { pathname } = useLocation();
   var path = pathname.split('/'); // Split the string by '/'
   var currentPage = path[path.length - 1];

   const [courses, setCourses] = useState(db.courses);
   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = () => {
      setCourses([...courses,
      {
         ...course,
         _id: new Date().getTime().toString()
      }]);
      console.log(courses);
   };
   const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = () => {
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
   };

   return (
      // <div>
      //    {/* <Link to="/hello">Hello</Link> |
      //       <Link to="/Labs/a3">A3</Link> |
      //       <Link to="/kanbas">Kanbas</Link> */}
      //    <Nav />
      //    <h1>Kanbas</h1>
      // </div>
      <Provider store={store}>
         <div className="kanbas-app">
            <div className={`${currentPage === "Home" ? 'home-hidden-kanbas-navigation-side-bar' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-navigation-side-bar' : ''}`}>
               <KanbasNavigation />
            </div>
            <div className={`kanbas-layout-wrapper ${currentPage === "Home" ? 'home-hidden-kanbas-layout-wrapper' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-layout-wrapper' : ''}`}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} />
                  } />
                  <Route path="Courses" element={<h1>Courses</h1>} />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
               </Routes>
            </div>
         </div>
      </Provider>
   );
}
export default Kanbas;
