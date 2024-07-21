import React, { useState, useEffect } from 'react';
import { Navbar, Modal } from 'react-bootstrap';
import { FaPalette } from 'react-icons/fa';
import axios from 'axios';

function Header({ changeBackground }) {
  const [show, setShow] = useState(false);
  const [backgrounds, setBackgrounds] = useState([]);

  const UNSPLASH_API_KEY = 'woI15aYWpg7K0mvUnw2ZDcU74IYLui9Rv1JRL8U0TSA';

  useEffect(() => {
    const fetchBackgrounds = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?count=6&query=pastel landscape&client_id=${UNSPLASH_API_KEY}`);
        console.log('API Response:', response.data);  // Debug log
        const bgUrls = response.data.map(img => img.urls.full);
        setBackgrounds(bgUrls);
        console.log('Background URLs:', bgUrls);  // Debug log
      } catch (error) {
        console.error('Error fetching backgrounds:', error);
      }
    };

    fetchBackgrounds();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-between align-items-center">
        <div className="d-flex w-100 justify-content-between">
          <FaPalette size={30} color="white" onClick={handleShow} style={{ cursor: 'pointer', marginLeft: '1280px' }} />
          <Navbar.Brand href="#home" className="text-center mx-auto">To-Do List</Navbar.Brand>
        </div>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Background</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap">
            {backgrounds.length > 0 ? (
              backgrounds.map((bg, index) => (
                <div
                  key={index}
                  className="bg-option"
                  style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
                  onClick={() => { changeBackground(`url(${bg})`); handleClose(); }}
                />
              ))
            ) : (
              <p>No backgrounds available.</p>
            )}
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .bg-option {
          width: 100px;
          height: 100px;
          margin: 10px;
          cursor: pointer;
          background-size: cover;
          border: 2px solid #ddd;
        }
        .bg-option:hover {
          border-color: #333;
        }
        .navbar {
          position: relative;
        }
        .navbar-brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default Header;
