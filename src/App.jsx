import './App.css'
import Today from './Components/Today';
import Month from './Components/Month';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import Details from './Components/Details';
import ModeContext from "./Components/ModeContext";
import TodoList from './Components/TodoList';
import EditTask from './Components/EditTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import Completed from './Components/Completed';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  if (localStorage.getItem('tasks') == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem("mode") == null) {
      localStorage.setItem("mode", "light");
    } else {
      if (localStorage.getItem("mode") == "dark") {
        setDarkMode(true);
      }
      else {
        setDarkMode(false);
      }
    }
  });

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
    tasks[mem_idx] = task[0];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  return (
    <ModeContext.Provider value={[darkMode, setDarkMode]}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/React-Todo/"
            element={<TodoList delete={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/React-Todo/today"
            element={<Today delelte={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/React-Todo/month"
            element={<Month delete={handleDelete} complete={handleCheck} />}
          />
          <Route
            path="/React-Todo/finish"
            element={<Completed delete={handleDelete} complete={handleCheck} />}
          />
          <Route path="/React-Todo/add" element={<AddTask />} />
          <Route path="/React-Todo/details/:id" element={<Details />} />
          <Route path="/React-Todo/edit-task/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </ModeContext.Provider>
  );
}

export default App
