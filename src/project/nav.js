import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'; 

function Navigation() {
    return (
        <div className="list-group">
            <NavLink 
                to="/project/" 
                className={({ isActive }) => isActive ? "list-group-item active-link" : "list-group-item"}>
                Home
            </NavLink>
            <NavLink 
                to="/project/search" 
                className={({ isActive }) => isActive ? "list-group-item active-link" : "list-group-item"}>
                Search
            </NavLink>
            <NavLink 
                to="/project/signin" 
                className={({ isActive }) => isActive ? "list-group-item active-link" : "list-group-item"}>
                Signin
            </NavLink>
            <NavLink 
                to="/project/signup" 
                className={({ isActive }) => isActive ? "list-group-item active-link" : "list-group-item"}>
                Signup
            </NavLink>
            <NavLink 
                to="/project/account" 
                className={({ isActive }) => isActive ? "list-group-item active-link" : "list-group-item"}>
                Account
            </NavLink>
        </div>
    );
}

export default Navigation;
