import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import './Header.css'

function Header({setRoute}) {

    function toSignIn(){
        setRoute('signin')
    }
    return (
        <div>
            <Navbar fixed ="top" collapseOnSelect expand="lg" bg="" variant="dark" className="pl5 pr5 padd">
                <Navbar.Brand href="#home" className=" txt-clr">HandlePressure</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Blogs</Nav.Link>
                        <Nav.Link  href="#memes" className="color" onClick={toSignIn}>
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
