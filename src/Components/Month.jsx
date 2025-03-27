import Task from './Task'
import { useState } from 'react';

function Month(props) {
    const [myState, setMyState] = useState(false);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let month_tasks = tasks.filter((task)=>{
        let diff = Math.abs(new Date(task.deadline).getTime() - Date.now());
        return diff <= 2629800000 && !task.completed;
    });
  return (
    <>
      <table className="table container overflow-scroll">
        <thead>
          <tr>
            <th scope="col" className="border-end border-end-2"></th>
            <th scope="col" className="border-end border-end-2">
              Title
            </th>
            <th scope="col" className="border-end border-end-2">
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
              <tr>
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
    </>
  );
}

export default Month