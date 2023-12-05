import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css"
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse,createModule } from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId)
            .then((status) => {dispatch(deleteModule(moduleId));});
    };
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="module-list">
          <div className="module-form-container">

            <div className="module-input-row">
              <input
                className="form-control"
                value={module.name}
                placeholder="New Module 123"
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
            <div className="module-input-row">
              <textarea
                className="form-control"
                placeholder="New Description"
                value={module.description}
                onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))
                }
              />
            </div>
            {/* 按钮 */}
            <div className="module-action-buttons">
              <button className="btn btn-warning" onClick={() => handleUpdateModule(module._id)}>
                Update
              </button>
              <button className="btn btn-success" onClick={handleAddModule}>
                Add
              </button>
            </div>
          </div>

       


        
      {modules
        .filter((mod) => mod.course === courseId)
        .map((mod, index) => (
          <div key={index} className="module-item">
            <li className="list-group-item">
              <div className="module-content">
                <div className="module-title">{mod.name}</div>
                <div className="module-description">{mod.description}</div>
              </div>
              <div className="module-actions">
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(setModule(mod))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(mod._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        ))}
    </div>
  );
}

export default ModuleList;