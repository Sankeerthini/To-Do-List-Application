import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultBackground from './default.jpg';  // Import the default background image

function App() {
  const [tasks, setTasks] = useState([]);
  const [background, setBackground] = useState(`url(${defaultBackground})`);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const changeBackground = (bg) => {
    setBackground(bg);
  };

  return (
    <div className="app" style={{ backgroundImage: background }}>
      <Header changeBackground={changeBackground} />
      <div className="container mt-5">
        <TaskForm addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          markComplete={markComplete} 
          editTask={editTask}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
