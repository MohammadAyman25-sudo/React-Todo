import ModeContext from "./ModeContext";
import DatePicker from "react-datepicker";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

function EditTask() {
    const { id } = useParams();
    const [darkMode, _] = useContext(ModeContext);
    let mem_idx = -1;
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let curr_task = tasks.filter((el, idx)=>{mem_idx = idx; return el.id == id});
    let dl = curr_task[0].deadline == "" ? new Date() : new Date(curr_task[0].deadline);
    let [taskTitle, setTaskTitle] = useState(curr_task[0].title);
    let [taskDescription, setTaskDescription] = useState(curr_task[0].description);
    let [taskDeadline, setTaskDeadline] = useState(dl);

  let handleEdit = (e) => {
    e.preventDefault();
    let strDeadline = curr_task[0].str_deadline;
    if (taskDeadline == "") {
      strDeadline = "--";
    } else {
      let hours =
        new Date(taskDeadline).getHours() < 10
          ? `0${new Date(taskDeadline).getHours()}`
          : `${new Date(taskDeadline).getHours()}`;
      let minutes =
        new Date(taskDeadline).getMinutes() < 10
          ? `0${new Date(taskDeadline).getMinutes()}`
          : `${new Date(taskDeadline).getMinutes()}`;
      let seconds =
        new Date(taskDeadline).getSeconds() < 10
          ? `0${new Date(taskDeadline).getSeconds()}`
          : `${new Date(taskDeadline).getSeconds()}`;
      strDeadline = `${new Date(taskDeadline).getDate()}/${
        new Date(taskDeadline).getMonth() + 1
      }/${new Date(taskDeadline).getFullYear()}@${hours}:${minutes}:${seconds}`;
    }
    
    let task = {
      id: id,
      title: taskTitle,
      completed: curr_task[0].competed,
      created_at: curr_task[0].created_at,
      str_created_at: curr_task[0].str_created_at,
      deadline: taskDeadline,
      str_deadline: strDeadline,
      description: taskDescription,
    };
    tasks[mem_idx] = task;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Your Task Is Editted Successfully !!!");
  };
  return (
    <div className={darkMode ? "bg-dark h-100" : "h-100"}>
      <h1 className={darkMode ? "text-center text-light" : "text-center"}>
        Edit Task
      </h1>
      <form className="container" data-bs-theme={darkMode ? "dark" : "light"}>
        <div className="task-title mb-3">
          <label
            htmlFor="title"
            className={
              darkMode
                ? "form-label d-flex gap-2 text-light"
                : "form-label d-flex gap-2"
            }
          >
            Title:<span>*</span>
          </label>
          <input
            type="text"
            id="title"
            value={taskTitle}
            className="form-control"
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="task-deadline mb-3">
          <label
            htmlFor="deadline"
            className={
              darkMode
                ? "form-label d-flex gap-2 text-light"
                : "form-label d-flex gap-2"
            }
          >
            Deadline:<span>(optional)</span>
          </label>
          <DatePicker
            onChange={(date) => {
              setTaskDeadline(date);
            }}
            selected={new Date(taskDeadline)}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
            id="deadline"
          />
        </div>
        <div className="task-description mb-3">
          <label
            htmlFor="describe"
            className={
              darkMode
                ? "form-label d-flex gap-2 text-light"
                : "form-label d-flex gap-2"
            }
          >
            Description:<span>(optional)</span>
          </label>
          <textarea
            id="describe"
            value={taskDescription}
            className="form-control"
            rows="7"
            cols="30"
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary" onClick={handleEdit}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditTask;
