import ModuleList from "../Modules/ModuleList";
import Sidebar from "./sidebar";
import "./index.css"
import {FaChevronDown, FaEllipsisV, FaPlus} from "react-icons/fa";
import ToolBar from "../Modules/ToolBar";

function Home() {
  return (
      <div className="container">
          <div className="module-list-container">
              <ToolBar/>
              <ModuleList />
          </div>
          <Sidebar/>
      </div>

  );
}
export default Home;