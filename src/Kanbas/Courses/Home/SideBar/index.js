import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faGauge,
    faBook,
    faCalendarDays,
    faInbox,
    faClock,
    faArrowRightFromBracket,
    faCircleQuestion,
    faChevronRight,
    faX
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function Sidebar() {
    const { courseId } = useParams();
    const links = ["Dashboard", "Account", "Courses", "Calendar", "Inbox", "Studio", "Commons", "History", "Help"];
    const icons = [faGauge, faCircleUser, faBook, faCalendarDays, faInbox, faYoutube, faArrowRightFromBracket, faClock, faCircleQuestion];
    return (
        <div className="sidebar">
            <Link to={`/Kanbas/Courses/${courseId}/Home`} className="align-self-end x-icon" >
                <FontAwesomeIcon icon={faX} className="icon-margin-big" />
            </Link>
            {links.map((link, index) => (
                <div className="sidebar-item" >
                    <Link key={index} to={`/Kanbas/${link}`} >
                        <FontAwesomeIcon icon={icons[index]} className={`sidebar-item-icon align-self-center ${icons[index] === faCircleUser ? "grey-user" : ""} ${[faCircleUser, faBook, faClock, faCircleQuestion].includes(icons[index]) ? "icon-margin-left" : ""}`} />
                        <div className="sidebar-item-text align-self-center">{link}</div>
                    </Link>
                    <FontAwesomeIcon icon={faChevronRight} className={`align-self-center color-grey ${[faCircleUser, faBook, faClock, faCircleQuestion].includes(icons[index]) ? "" : "hidden-chevron-icon"}`} />
                </div>
            ))}
        </div>
    );
}
export default Sidebar;