import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SignUp from './SignUp'
import 'tachyons'


function Main({onRouteChange, route, setRoute}) {

   
    return (
        <div className="bg">
            
            <Container fluid>
                <Row>
                    <Col className="column pl5 pr5">LOL</Col>
                    <Col  className="column">
                        <SignUp onRouteChange={onRouteChange} route = {route} setRoute={setRoute}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
