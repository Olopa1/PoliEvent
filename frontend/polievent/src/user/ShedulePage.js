import './MainPage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Shedule} from './Shedule'
import Menu from './Menu'
import { Container, Row, Col, Button } from 'react-bootstrap';
import GridPosts from './GridPosts';

export const ShedulePage = () => {
  return (
    <div className="main-page">
        <Container>
            <Row>
                <Col>
                    <Menu/>
                </Col>
                <Col md="auto">
                    <Shedule/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default ShedulePage;
