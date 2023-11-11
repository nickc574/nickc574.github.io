import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './home';
import Link from './link';


class View extends Component {
    
    homeStyle = { display: "none"};
    linkStyle = { display: "block" };

    constructor(){
        super();
        this.homeStyle = { display: "block"}
        this.linkStyle = { display: "none"}
    }

    setVisible(value){
        //this.state.visible = value;
        console.log("homeStyle: " + this.homeStyle.display);

        if (value === "home")
        { this.homeStyle = { display: "block"} ; }
        else
        { this.homeStyle = { display: "none"} ; }
        console.log("homeStyle2: " + this.homeStyle.display);

        if (value === "link")
        { this.linkStyle = { display: "block"} ;}
        else
        { this.linkStyle = { display: "none"} ;}
    }

    // getVisible(name){
    //     if (name === this.state.visible)
    //         return { display: 'block' }
    //     else
    //         return { display: 'none' }
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs lg="2">
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container fluid>
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        {/* <Button onClick={() => setVisible("click button")}>Nav Button</Button> */}
                                        <Nav.Link href="#home" onClick={() => this.setVisible("home")} >Home</Nav.Link>
                                        <Nav.Link href="#link" onClick={() => this.setVisible("link")}>Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col lg="9">
                        <div style={this.homeStyle}>
                            <Home />
                        </div>
                        <div style={this.linkStyle}>
                            <Link />
                        </div>

                    </Col>
                </Row>

            </Container>
        );
    };
};

export default View;