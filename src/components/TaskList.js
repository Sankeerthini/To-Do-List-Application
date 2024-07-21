// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

function TaskList({ tasks, deleteTask, markComplete, editTask }) {
  return (
    <ListGroup className="mt-3">
      {tasks.sort((a, b) => new Date(a.deadline.split(', ')[0]) - new Date(b.deadline.split(', ')[0])).map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          markComplete={markComplete} 
          editTask={editTask} 
        />
      ))}
    </ListGroup>
  );
}

export default TaskList;
