// KPIBox.jsx

import React from 'react';
import { Card } from 'react-bootstrap';

const KPIBox = ({ title, value }) => {
  return (
    <Card className="h-100 shadow">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text as="h4" className="mt-2">{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default KPIBox;