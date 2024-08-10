import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/UserListing';
import Posts from './pages/PostListing';
import Login from './pages/Login'; 

// Import Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("Hello")
  return (
    <Router>
      <Container fluid className="p-0">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Container>
    </Router>
  );
}

export default App;