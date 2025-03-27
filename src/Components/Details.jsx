import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let task = tasks.filter((task)=>{return task.id == id});
    return (
    <div className="container">
        <h2 className="text-center text-capitalize">{task[0].title}</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Created At</th>
              <td>{task[0].str_created_at}</td>
            </tr>
            <tr>
              <th scope="row">Deadline</th>
              <td>{task[0].str_deadline}</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{task[0].description}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Details