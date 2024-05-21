import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './PostonMainPage';
import React from 'react';
import './GridPosts.css';
function GridPosts() {
    const post = {
        title: 'Politechnika na foodtruck',
        content: 'Zaprszamy Wszystkich studentów na food trucki, pierwsze 100 osob dostanie darmowe jedzenie',
        author: 'WPRE ',
        date: 'May 21, 2024',
      };
  return (
    <div className="scroll-view">
    {    
    <Container>
    <Row className="justify-content-center">
      <Col sm={6}>
        <Post {...post} />
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm={6}>
        <Post {...post} />
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm={6}>
        <Post {...post} />
      </Col>
    </Row>
    </Container>
    }
  </div>
  );
}

export default GridPosts;