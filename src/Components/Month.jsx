import Task from './Task'
import ModeContext from './ModeContext'
import { useState, useContext } from 'react';

function Month(props) {
    const [myState, setMyState] = useState(false);
    const [darkMode, _] = useContext(ModeContext);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let month_tasks = tasks.filter((task)=>{
        let diff = Math.abs(new Date(task.deadline).getTime() - Date.now());
        return diff <= 2629800000 && !task.completed;
    });
  return (
    <div className={darkMode ? "bg-dark h-100" : "h-100"}>
      <table
        className={darkMode ? "table table-dark container" : "table container"}
      >
        <thead>
          <tr>
            <th scope="col" className="border-end border-end-2"></th>
            <th scope="col" className="border-end border-end-2">
              Title
            </th>
            <th
              scope="col"
              className="border-end border-end-2 d-lg-table-cell d-none"
            >
              Created At
            </th>
            <th scope="col" className="border-end border-end-2">
              Deadline
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {month_tasks.map((task) => {
            return (
              <tr className={darkMode ? "dark-mode" : "light-mode"}>
                <Task
                  taskID={task.id}
                  delete={props.delete}
                  title={task.title}
                  created_at={task.str_created_at}
                  deadline={task.str_deadline}
                  complete={props.complete}
                  completed={task.completed}
                  parentState={myState}
                  setParentState={setMyState}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Month