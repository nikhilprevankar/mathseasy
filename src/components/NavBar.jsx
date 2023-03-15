import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import AlertMe from "./AlertMe";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function NavBar({ total = 0, title= "Matheasy", showModalFn }) {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home">
          <Row>
            <Col sm={6}>
              <Badge bg="primary">{title}</Badge>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <AlertMe total={total} showModalFn={showModalFn} />
            </Col>
          </Row>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
