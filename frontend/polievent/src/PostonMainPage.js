import React from 'react';
import './PostonMainPage.css'; // Zaimportuj arkusz stylów CSS
import { Container, Row, Col } from 'react-bootstrap';

const Post = ({ title, content, author, date }) => {
  return (
    <div className="post-container">
      <div className="image-container">
        <img src="/foodtruck.webp" alt="Obraz" className="image" />
        <div className="text">POLITECHNIKA NA FOODTRUCK</div>
      </div>
      <div className="post">
        <Container>
          <Row>
            <Col>ul.Politechniczna 8</Col>
            <Col>25.05.2024r.</Col>
            <Col>23/50</Col>
          </Row>
        </Container>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="post-footer">
          <span>Author: {author}</span>
          <span>Date: {date}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
