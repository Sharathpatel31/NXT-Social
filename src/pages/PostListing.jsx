import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import KPIBox from '../components/KPIBox';
import { dummyData } from '../Data/dummyData';

const PostListing = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showHideUnhide, setShowHideUnhide] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPost, setNewPost] = useState({ caption: '', mediaUrl: '' });

  useEffect(() => {
    setPosts(dummyData.getPosts());
  }, []);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleDelete = (post) => {
    setSelectedPost(post);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    setPosts(posts.filter(p => p.id !== selectedPost.id));
    setShowDelete(false);
  };

  const handleHideUnhide = (post) => {
    setSelectedPost(post);
    setShowHideUnhide(true);
  };

  const confirmHideUnhide = () => {
    setPosts(posts.map(p => p.id === selectedPost.id ? {...p, hidden: !p.hidden} : p));
    setShowHideUnhide(false);
  };

  const handleAddPost = () => {
    setShowAddPost(true);
  };

  const confirmAddPost = () => {
    const newPostWithId = {
      ...newPost,
      id: Math.max(...posts.map(p => p.id)) + 1,
      hidden: false,
      publishedAt: new Date()  
    };
    setPosts([...posts, newPostWithId]);
    setShowAddPost(false);
    setNewPost({ caption: '', mediaUrl: '' });
  };

  const recentPosts = dummyData.getRecentPosts(posts);

  return (
    <Container>
      <h1 className="my-4">Post Listing</h1>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <KPIBox title="Total Posts" value={posts.length} />
        </Col>
        <Col md={6} className="mb-3">
          <KPIBox title="Recent Posts (24h)" value={recentPosts.length} />
        </Col>
      </Row>
      <Button variant="primary" className="mb-3" onClick={handleAddPost}>
        Add New Post
      </Button>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Caption</th>
              <th>Media URL</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.caption}</td>
                <td>{post.mediaUrl}</td>
                <td>{post.hidden ? 'Hidden' : 'Visible'}</td>
                <td>
                  <Button variant="danger" size="sm" className="me-2" onClick={() => handleDelete(post)}>Delete</Button>
                  <Button variant="secondary" size="sm" onClick={() => handleHideUnhide(post)}>{post.hidden ? 'Unhide' : 'Hide'}</Button>
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
        <Button disabled={page >= Math.ceil(posts.length / rowsPerPage) - 1} onClick={() => handleChangePage(page + 1)}>
          Next
        </Button>
      </div>

      {/* Delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Hide/Unhide Modal */}
      <Modal show={showHideUnhide} onHide={() => setShowHideUnhide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost?.hidden ? 'Confirm Unhide' : 'Confirm Hide'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to {selectedPost?.hidden ? 'unhide' : 'hide'} this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHideUnhide(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmHideUnhide}>
            {selectedPost?.hidden ? 'Unhide' : 'Hide'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Post Modal */}
      <Modal show={showAddPost} onHide={() => setShowAddPost(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Caption</Form.Label>
              <Form.Control 
                type="text" 
                value={newPost.caption}
                onChange={(e) => setNewPost({...newPost, caption: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Media URL</Form.Label>
              <Form.Control 
                type="text" 
                value={newPost.mediaUrl}
                onChange={(e) => setNewPost({...newPost, mediaUrl: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddPost(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmAddPost}>
            Add Post
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostListing;