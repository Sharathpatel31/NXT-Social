import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import KPIBox from '../components/KPIBox';
import { dummyData } from '../Data/dummyData';

const UserListing = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [users, setUsers] = useState(dummyData.users);
  const [showEdit, setShowEdit] = useState(false);
  const [showBan, setShowBan] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
    setShowEdit(true);
  };

  const confirmEdit = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? editedUser : u));
    setShowEdit(false);
  };

  const handleBan = (user) => {
    setSelectedUser(user);
    setShowBan(true);
  };

  const confirmBan = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? {...u, banned: true} : u));
    setShowBan(false);
  };

  return (
    <Container>
      <h1 className="my-4">User Listing</h1>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <KPIBox title="Total Users" value={users.length} />
        </Col>
        <Col md={6} className="mb-3">
          <KPIBox title="Active Users (24h)" value={dummyData.getActiveUsers().length} />
        </Col>
      </Row>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.banned ? 'Banned' : 'Active'}</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(user)}>Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => handleBan(user)} disabled={user.banned}>Ban</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-3">
        <Button disabled={page === 0} onClick={() => handleChangePage(page - 1)} className="me-2">
          Previous
        </Button>
        <Button disabled={page >= Math.ceil(users.length / rowsPerPage) - 1} onClick={() => handleChangePage(page + 1)}>
          Next
        </Button>
      </div>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                value={editedUser.username || ''}
                onChange={(e) => setEditedUser({...editedUser, username: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                value={editedUser.name || ''}
                onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                value={editedUser.email || ''}
                onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Ban Modal */}
      <Modal show={showBan} onHide={() => setShowBan(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Ban</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to ban this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBan(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmBan}>
            Ban User
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserListing;