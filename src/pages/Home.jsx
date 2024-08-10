// Home.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import KPIBox from '../components/KPIBox';
import { dummyData } from '../Data/dummyData';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(dummyData.getPosts());

    const intervalId = setInterval(() => {
      setPosts(dummyData.getPosts());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const activeUsers = dummyData.getActiveUsers();
  const recentPosts = dummyData.getRecentPosts(posts);

  return (
    <Container>
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col xs={12} sm={6} md={3} className="mb-3">
          <KPIBox title="Total Users" value={dummyData.users.length} />
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-3">
          <KPIBox title="Total Posts" value={posts.length} />
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-3">
          <KPIBox title="Active Users (24h)" value={activeUsers.length} />
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-3">
          <KPIBox title="Recent Posts (24h)" value={recentPosts.length} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;