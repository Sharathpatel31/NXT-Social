import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="d-none d-md-block bg-light sidebar">
          <Sidebar />
        </Col>
        <Col md={9} lg={10} className="ms-sm-auto px-md-4">
          <main className="py-3">
            {children}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;