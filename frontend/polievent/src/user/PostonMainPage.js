import React from 'react';
import './PostonMainPage.css';
import {Container, Row, Col } from 'react-bootstrap';
import Buttons from './OptionPicker'
const Post = ({ title, content, author, date }) => {
  return (
    <div className="post-container">
      <div className="image-container">
        <img src="/foodtruck.webp" alt="Obraz" className="image" />
        <div className="text">{title}</div>
      </div>
      <div className="post">
        <Container>
          <Row>
            <Col>ul.Politechniczna 8</Col>
            <Col>25.05.2024r.</Col>
            <Col className="last-col">23/50</Col>
          </Row>
        </Container>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="post-footer">
            <Buttons/>
          <span>Author: {author}</span>
          <span>Date: {date}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;