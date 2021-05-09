import React from 'react'
import Cardsng from './Cardsng'
import {Col, Container, Row} from 'react-bootstrap'
import './Cardsng.css'

function Cards() {
    return (
        <div className = "spacing">
        <Container>
        <Row>
            <Col md={4}><Cardsng value = 'Lack Of Motivation' url = 'https://www.cedars-sinai.org/content/dam/cedars-sinai/blog/2019/07/common-physical-symptoms-of-hidden-stress.jpg' /></Col>
            <Col md={4}><Cardsng value = 'Procastination' url = 'https://www.youthdynamics.org/wp-content/uploads/2020/04/stress.png'/></Col>
            <Col md={4}><Cardsng value = 'Stress And Overwhelm' url='https://ideascale.com/wp-content/uploads/2018/06/yay-20326122-digital.jpg'/></Col>
        </Row>
        <Row>
            <Col md={4}><Cardsng value = 'Comming Soon'url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
            <Col md={4}><Cardsng value = 'Comming Soon' url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
            <Col md={4}><Cardsng value = 'Comming Soon' url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
        </Row>
        <Row>
            <Col md={4}><Cardsng value = 'Comming Soon' url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
            <Col md={4}><Cardsng value = 'Comming Soon' url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
            <Col md={4}><Cardsng value = 'Comming Soon' url = 'https://1c7490c0055723b2affc-8f475f2fa394bc8453917e1fb7321b33.ssl.cf1.rackcdn.com/coming-soon-6692450_1590394338.jpg'/></Col>
        </Row>
        </Container>
        </div>
    )
}

export default Cards
