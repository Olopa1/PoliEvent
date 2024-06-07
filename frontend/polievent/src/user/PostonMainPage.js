import React from 'react';
import './PostonMainPage.css';
import {Container, Row, Col } from 'react-bootstrap';
import Buttons from './OptionPicker'
const Post = ({postid,title, desc,street, company,interestedPeople,maxPeople,datePosted,dateEvent,interestedUsers,MaybeUsers,NotUsers}) => { 
const Post = ({title, desc,street, company,interestedPeople,maxPeople,datePosted,dateEvent,timeEvent}) => {
  return (
    <div className="post-my-container">
      <div className="image-container">
        <img src="/foodtruck.webp" alt="Obraz" className="image" />
        <div className="text">{title}</div>
      </div>
      <div className="post-my">
        <Container>
          <Row>
            <Col>ul. {street}</Col>
            <Col className="date-time-col">
              <span className="date">{dateEvent}</span>
              <span className="hour">{timeEvent}</span>
            </Col>
            <Col className="last-col">{interestedPeople}/{maxPeople}</Col>
          </Row>
        </Container>
        <h2>{title}</h2>
        <div className="post-my-desc">
          <p>{desc}</p>
        </div>
          <div className="post-my-footer">
            <Buttons id={postid} arrUsers={interestedUsers} arrMaybeUsers={MaybeUsers} arrNotUsers={NotUsers}/>
          <span>{company}</span>
          <span>{datePosted}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
