import React from 'react';
import './PostonMainPage.css';
import {Container, Row, Col } from 'react-bootstrap';
import Buttons from './OptionPicker'
const Post = ({title, desc,street, company,interestedPeople,maxPeople,datePosted,dateEvent}) => {
  return (
    <div className="post-container">
      <div className="image-container">
        <img src="/foodtruck.webp" alt="Obraz" className="image" />
        <div className="text">{title}</div>
      </div>
      <div className="post">
        <Container>
          <Row>
            <Col>ul. {street}</Col>
            <Col>{dateEvent}</Col>
            <Col className="last-col">{interestedPeople}/{maxPeople}</Col>
          </Row>
        </Container>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="post-footer">
            <Buttons/>
          <span>{company}</span>
          <span>{datePosted}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
