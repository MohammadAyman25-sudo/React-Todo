import Task from './Task';
import ModeContext   from './ModeContext';
import { useState, useContext, useEffect } from 'react';

function TodoList(props) {
    const [darkMode, _] = useContext(ModeContext);
    const [myState, setMyState] = useState(false);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let unfinished_tasks = tasks.filter((task)=>{return !task.completed;});
  return (
    <div className={darkMode?"bg-dark h-100":"h-100"}>
      <table className={!darkMode ? "table container" : "table table-dark container"}>
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
          {unfinished_tasks.map((task) => {
            return (
              <tr className={!darkMode ? "light-mode" : "dark-mode"}>
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

export default TodoList