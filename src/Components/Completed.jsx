import Task from './Task'
import ModeContext from './ModeContext';
import { useState, useContext } from 'react'

function Completed(props) {
  const [myState, setMyState] = useState(false);
  const [darkMode, _] = useContext(ModeContext);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let completed_tasks = tasks.filter((task) => {
    return task.completed;
  });
  return (
    <div className={darkMode ? "bg-dark h-100" : "h-100"}>
      <table className={darkMode ? "table table-dark container" : "table container"}>
        <thead>
          <tr>
            <th scope="col" className="border-end border-end-2"></th>
            <th scope="col" className="border-end border-end-2">
              Title
            </th>
            <th
              scope="col"
              className="border-end d-lg-table-cell d-none border-end-2"
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
          {completed_tasks.map((task) => {
            return (
              <tr className={darkMode ? "dark-mode" : "light-mode"}>
                <Task
                  taskID={task.id}
                  completed={task.completed}
                  delete={props.delete}
                  title={task.title}
                  created_at={task.str_created_at}
                  deadline={task.str_deadline}
                  complete={props.complete}
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

export default Completed