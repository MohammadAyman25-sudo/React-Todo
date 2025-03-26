import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let task = tasks.filter((task)=>{return task.id == id});
    return (
    <div className="container">
        <h2 className="text-center text-capitalize">{task[0].title}</h2>
        <p>Created At: {task[0].str_created_at}</p>
        <p>Deadline: {task[0].str_deadline}</p>
        <p>Description: {task[0].description}</p>
    </div>
  )
}

export default Details