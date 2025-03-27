import { useContext } from 'react';
import ModeContext from './ModeContext';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [darkMode, _] = useContext(ModeContext);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let task = tasks.filter((task)=>{return task.id == id});
    return (
      <div className={darkMode ? "container-fluid bg-dark h-100" : "container"}>
        <h2
          className={
            darkMode
              ? "text-center text-capitalize text-light"
              : "text-center text-capitalize"
          }
        >
          {task[0].title}
        </h2>
        <table className={darkMode ? "table table-dark container" : "table"}>
          <tbody>
            <tr className={darkMode ? "dark-mode" : "light-mode"}>
              <th scope="row">Created At</th>
              <td>{task[0].str_created_at}</td>
            </tr>
            <tr className={darkMode ? "dark-mode" : "light-mode"}>
              <th scope="row">Deadline</th>
              <td>{task[0].str_deadline}</td>
            </tr>
            <tr className={darkMode ? "dark-mode" : "light-mode"}>
              <th scope="row">Description</th>
              <td>{task[0].description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Details