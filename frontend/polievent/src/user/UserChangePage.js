import './MainPage.css';
import React from 'react';
import Menu from './Menu'
import { Container, Row, Col } from 'react-bootstrap';
import ChangeUserDataForm from './UserChangeData';

export const ChangeUserPage = () => {
  return (
    <div className="main-page">
        <Container>
            <Row>
                <Col>
                    <Menu/>
                </Col>
                <Col md="auto">
                    <ChangeUserDataForm/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default ChangeUserPage;