// src/components/TaskItem.js
import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, deleteTask, markComplete, editTask }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline.split(', ')[0]);
  const [time, setTime] = useState(task.deadline.split(', ')[1]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    const formattedDeadline = deadline ? `${new Date(deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}, ${time}` : '';
    editTask({ ...task, title, description, deadline: formattedDeadline });
    handleClose();
  };

  return (
    <ListGroup.Item className={`d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}>
      <div>
        <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h5>
        <p>{task.description}</p>
        <small>Deadline: {task.deadline}</small>
      </div>
      <div>
        <Button variant="success" onClick={() => markComplete(task.id)} className="me-2">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button variant="info" onClick={handleShow} className="me-2">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="danger" onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
}

export default TaskItem;
