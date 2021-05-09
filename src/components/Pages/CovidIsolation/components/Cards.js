import React from 'react'
import Cardsng from './Cardsng'
import {Col, Container, Row} from 'react-bootstrap'
import './Cardsng.css'

function Cards() {
    return (
        <div className = "spacing">
        <Container>
        <Row>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
        </Row>
        <Row>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
        </Row>
        <Row>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
            <Col md={4}><Cardsng /></Col>
        </Row>
        </Container>
        </div>
    )
}

export default Cards
