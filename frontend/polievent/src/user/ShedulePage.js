import './MainPage.css';
import React from 'react';
import {Shedule} from './Shedule'
import Menu from './Menu'
import { Container, Row, Col } from 'react-bootstrap';

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
