import { Link } from "react-router-dom";
import { useState } from "react";

function Task(props) {
  return (
    <>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          data-text={props.taskID}
          checked={props.completed}
          onChange={(e)=>{props.complete(e); props.setParentState(!props.parentState)}}
        />
      </td>
      <td>
        <Link to={`/details/${props.taskID}`} className="w-25">
          {props.title}
        </Link>
      </td>
      <td>{props.created_at}</td>
      <td>{props.deadline}</td>
      <td>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
          <li className="dropdown-item">
            <Link to={`/edit-task/${props.taskID}`}>
              <i className="bi bi-pencil-square"></i> Edit
            </Link>
          </li>
          <li className="dropdown-item bg-danger">
            <Link
              href="#"
              className="text-white"
              data-text={props.taskID}
              onClick={(e)=>{props.delete(e); props.setParentState(!props.parentState);}}
            >
            <i className="bi bi-trash"></i> Delete
            </Link>
          </li>
        </ul>
        <button
          className="dropdown-toggle"
          id="dropdown"
          data-bs-toggle="dropdown"
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </td>
    </>
  );
}

export default Task