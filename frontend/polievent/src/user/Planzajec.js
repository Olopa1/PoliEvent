import './Planzajec.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './PostonMainPage';
import Menu from './Menu'
import { Container, Row, Col, Button } from 'react-bootstrap';
import GridPosts from './GridPosts';

const Planzajec = () => {
  return (
    <div className="main-page">
    <Menu/>
    <GridPosts/>
  </div>
  );
};

export default Planzajec;