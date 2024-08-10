import React from 'react';
import { Table, Button } from 'react-bootstrap';

function DataTable({ headers, data, actions }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
              {actions && (
                <td>
                  {actions.map((action, idx) => (
                    <Button key={idx} variant="primary" size="sm" className="me-2 mb-1">
                      {action.label}
                    </Button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;