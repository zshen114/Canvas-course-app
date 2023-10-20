import { Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouseUser,
    faCircleRadiation,
    faPlug,
    faRocket, 
    faUserGroup,
    faBullhorn,
    faFolderClosed,
    faBullseye,
    faGear,
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook, faCircle, faComment, faFileLines } from "@fortawesome/free-regular-svg-icons";
import "./index.css";

function NavigationMenu() {
    const links = ["Home", "Modules", "Piazza", "Zoom Mettings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const icons = [faHouseUser, faCircleRadiation, faPlug, faPlug, faPenToSquare, faRocket, faAddressBook, faUserGroup, faPlug, faComment, faBullhorn, faFileLines, faFolderClosed, faFileLines, faBullseye, faCircle, faFileLines, faPlug, faGear];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="navigationMenu">
            <div className="list-group" >
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        <FontAwesomeIcon icon={icons[index]} className="icon-margin-small" />
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default NavigationMenu;