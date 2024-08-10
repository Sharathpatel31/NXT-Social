import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav className="flex-column bg-light sidebar">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="text-dark">
          <i className="bi bi-house me-2"></i>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/users" className="text-dark">
          <i className="bi bi-people me-2"></i>
          Users
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/posts" className="text-dark">
          <i className="bi bi-images me-2"></i>
          Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/login" className="text-dark">
          <i className="bi bi-box-arrow-in-right me-2"></i>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;