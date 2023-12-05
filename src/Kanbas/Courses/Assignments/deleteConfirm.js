
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
  } from "./assignmentsReducer";
import * as client from './client';

function DeleteConfirm({state, setOpen}){
    
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const doThing = (input) => {
        if (input == "Yes"){
            client.deleteAssignment(assignment._id)
                .then(() => {
                    dispatch(deleteAssignment(assignment._id))
                    setOpen({open: false});
                })
        }
        else if(input =="No") {
            setOpen({open: false});
        }
    }
    return (
        state.open && (
        <div className="wd-delete-confirm">
            <h3>
            Confirm assignment deletion {assignment.title}?
                </h3>
                <br></br>
            <button onClick={() =>doThing("Yes")}>Yes</button>
            <button onClick={() =>doThing("No")}>No</button>
            </div>)
        
    )
}
export default DeleteConfirm;