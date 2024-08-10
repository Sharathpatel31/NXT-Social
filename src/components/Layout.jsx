import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="p-0">
          <Sidebar show={show} handleClose={handleClose} />
        </Col>
        <Col md={9} lg={10} className="ms-sm-auto px-md-4">
          <Button variant="" className="d-md-none mt-2 mb-2 shadow" onClick={handleShow}>
           <img  src='./ham.svg' alt="Menu Icon" style={{ width: '24px', height: '24px' }}></img>
          </Button>
          <main className="py-3">
            {children}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;