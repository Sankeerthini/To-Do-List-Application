// src/components/TaskForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDeadline = deadline ? `${new Date(deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}, ${time}` : '';
    addTask({
      id: Date.now(),
      title,
      description,
      deadline: formattedDeadline,
      completed: false,
    });
    setTitle('');
    setDescription('');
    setDeadline('');
    setTime('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Deadline</Form.Label>
        <Form.Control 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Task
      </Button>
    </Form>
  );
}

export default TaskForm;
