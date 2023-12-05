import React from "react";
import { FaRegPlusSquare, FaEllipsisH } from "react-icons/fa";
import {IoIosArrowDropdownCircle, IoMdArrowDropdown} from "react-icons/io";
import "./ToolBar.css";
import {AiOutlinePlus} from "react-icons/ai";

function ToolBar() {
    return (
        <div className="toolbar">
        <button className="btn toolbar-btn">Collapse All</button>
        <button className="btn toolbar-btn">View Progress</button>
        <div className="dropdown">
          <button className="btn toolbar-btn">
            <IoIosArrowDropdownCircle/> Publish All <IoMdArrowDropdown className="arrow" />
          </button>
        </div>
        <button className="btn btn-danger toolbar-btn"><AiOutlinePlus/> Assignment</button>
        <div className="menu">
          <FaEllipsisH />
        </div>
        
      </div>
    );
}
<hr /> 
export default ToolBar;
