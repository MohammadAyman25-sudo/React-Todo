import Task from './Task'
import { useState } from 'react'

function Completed(props) {
  const [myState, setMyState] = useState(false);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let completed_tasks = tasks.filter((task) => {
    return task.completed;
  });
  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Created At</th>
            <th scope="col">Deadline</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {completed_tasks.map((task) => {
            return (
              <tr>
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
    </>
  );
}

export default Completed