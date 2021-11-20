import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <button className="btn btn-success me-2" onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button className="btn btn-warning me-2" onClick={() => dispatch(updateTodo(todo))}> Update </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}

export default TodoForm;
