import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNeos } from "@fortawesome/free-brands-svg-icons";


import {
    faCircleUser,
    faGauge,
    faBook,
    faCalendarDays,
    faInbox,
    faClock,
    faDesktop,
    faArrowRightFromBracket,
    faCircleQuestion,
    faUserCircle,
    faTachometerAlt,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faArrowRight,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    const icons = [faUserCircle, faTachometerAlt, faBook, faCalendarDays, faEnvelopeOpenText, faClock,  faDesktop, faArrowRight, faQuestionCircle];
    return (
        <div className="kanbas-navigation-side-bar">
            <div className="list-group">
                <div className="list-group-item">
                <FontAwesomeIcon icon={faNeos} className="neos-icon" />
                </div>
                {icons.map((icon, index) => (
                    <div key={index} className="list-group-item">
                        <Link
                            to={`/Kanbas/${links[index]}`} className={`list-group-item ${pathname.includes(
                                links[index]
                            ) && "active"}`}>
                            <div className="d-flex flex-column">
                                <FontAwesomeIcon icon={icon} font-size="22px" color={icon === faCircleUser ? "gray" : "red"} />
                                {links[index]}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KanbasNavigation;