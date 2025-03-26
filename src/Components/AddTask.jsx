import { useState, useRef } from "react";
import DatePicker from "react-datepicker";

function AddTask() {
  let descRef = useRef();
  let titleRef = useRef();
  let [taskTitle, setTaskTitle] = useState("");
  let [taskDeadline, setTaskDeadline] = useState('');
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let [taskDescription, setTaskDescription] = useState("");

  let handleAdd = (e) => {
    e.preventDefault();
    let strDeadline = "";
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
    let create_date = new Date();
    let hours =
      create_date.getHours() < 10
        ? `0${create_date.getHours()}`
        : `${create_date.getHours()}`;
    let minutes =
      create_date.getMinutes() < 10
        ? `0${create_date.getMinutes()}`
        : `${create_date.getMinutes()}`;
    let seconds =
      create_date.getSeconds() < 10
        ? `0${create_date.getSeconds()}`
        : `${create_date.getSeconds()}`;
    let strCreateDate = `${create_date.getDate()}/${
      create_date.getMonth() + 1
    }/${create_date.getFullYear()}@${hours}:${minutes}:${seconds}`;
    let task = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
      created_at: create_date,
      str_created_at: strCreateDate,
      deadline: taskDeadline,
      str_deadline: strDeadline,
      description: taskDescription,
    }
    tasks = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    titleRef.current.value = "";
    descRef.current.value = "";
    alert("Your Task Is Added Successfully!!!");
  };
  return (
    <div>
      <h1 className="text-center">Add Task</h1>
      <form className="container">
        <div className="task-title mb-3">
          <label htmlFor="title" className="form-label d-flex gap-2">
            Title:<span>*</span>
          </label>
          <input
            ref={titleRef}
            type="text"
            id="title"
            className="form-control"
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="task-deadline mb-3">
          <label htmlFor="deadline" className="form-label d-flex gap-2">
            Deadline:<span>(optional)</span>
          </label>
          <DatePicker
            onChange={(date) => {
              setTaskDeadline(date);
            }}
            selected={taskDeadline}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
            id="deadline"
          />
        </div>
        <div className="task-description mb-3">
          <label htmlFor="describe" className="form-label d-flex gap-2">
            Description:<span>(optional)</span>
          </label>
          <textarea
            id="describe"
            ref={descRef}
            className="form-control"
            rows="7"
            cols="30"
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary" onClick={handleAdd}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
