import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ show, handleClose }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const NavContent = () => (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="text-dark" onClick={handleClose}>
          <i className="bi bi-house me-2"></i>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/users" className="text-dark" onClick={handleClose}>
          <i className="bi bi-people me-2"></i>
          Users
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/posts" className="text-dark" onClick={handleClose}>
          <i className="bi bi-images me-2"></i>
          Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/login" className="text-dark" onClick={handleClose}>
          <i className="bi bi-box-arrow-in-right me-2"></i>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <>
      {isDesktop ? (
        <div className="bg-light sidebar vh-100 d-flex flex-column">
          <header className="px-3 py-2 mt-3 bg-light text-black">
            <h4 className="m-0">SPARTIGRAM</h4>
          </header>
          <NavContent />
        </div>
      ) : (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SPARTIGRAM</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavContent />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default Sidebar;
