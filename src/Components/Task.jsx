import { useContext } from "react";
import ModeContext from "./ModeContext";
import { Link } from "react-router-dom";

function Task(props) {
  const [darkMode, _] = useContext(ModeContext);
  return (
    <>
      <td className="border-end border-end-2">
        <input
          className="form-check-input"
          type="checkbox"
          data-text={props.taskID}
          checked={props.completed}
          onChange={(e) => {
            props.complete(e);
            props.setParentState(!props.parentState);
          }}
        />
      </td>
      <td className="border-end border-end-2">
        <Link to={`/React-Todo/details/${props.taskID}`} className="w-25">
          {props.title}
        </Link>
      </td>
      <td className="d-lg-table-cell d-none border-end border-end-2">
        {props.created_at}
      </td>
      <td className="border-end border-end-2">{props.deadline}</td>
      <td>
        <ul
          className={
            darkMode
              ? "dropdown-menu dropdown-menu-dark"
              : "dropdown-menu dropdown-menu"
          }
          aria-labelledby="dropdown"
        >
          <li className="dropdown-item">
            <Link
              to={`/React-Todo/edit-task/${props.taskID}`}
              className={darkMode ? "text-light" : ""}
            >
              <i className="bi bi-pencil-square"></i> Edit
            </Link>
          </li>
          <li className="dropdown-item bg-danger">
            <Link
              href="#"
              className="text-light"
              data-text={props.taskID}
              onClick={(e) => {
                props.delete(e);
                props.setParentState(!props.parentState);
              }}
            >
              <i className="bi bi-trash"></i> Delete
            </Link>
          </li>
        </ul>
        <button
          className={
            darkMode ? "dropdown-toggle text-light" : "dropdown-toggle"
          }
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