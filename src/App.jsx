import './App.css'
import Today from './Components/Today';
import Month from './Components/Month';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import Details from './Components/Details';
import TodoList from './Components/TodoList';
import EditTask from './Components/EditTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import Completed from './Components/Completed';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const handleDelete = (e)=>{
    let el = e.target;
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let id = el.getAttribute("data-text");
    let new_tasks = tasks.filter((task)=>{return task.id != id});
    localStorage.setItem('tasks', JSON.stringify(new_tasks));
  };
  const handleCheck = (e) => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let el = e.target;
    let id = el.getAttribute('data-text');
    let mem_idx = -1;
    let task = tasks.filter((task, idx)=>{
      if (task.id == id)  
        mem_idx = idx;
      return task.id == id});
    task[0].completed = !task[0].completed;
    let new_tasks = tasks.filter((_task)=>{return _task.id != id});
    localStorage.setItem('tasks', JSON.stringify([...new_tasks, task[0]]));
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<TodoList delete={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/today"
            element={<Today delelte={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/month"
            element={<Month delete={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/finish"
            element={<Completed delete={handleDelete} complete={handleCheck} />}
          />
          <Route path="/add" element={<AddTask />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
