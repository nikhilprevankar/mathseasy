import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AlertMe from "../../components/AlertMe";
import ModalMe from "../../components/ModalMe";
import NavBar from "../../components/NavBar";
import TableMe from "../../components/TableMe";

function HomePage() {
  const [grossTotal, setGrossTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <NavBar total={grossTotal} showModalFn={setShowModal} />
        </Col>
      </Row>
      {showModal ? (
        <Row>
          <Col sm={12}>
            <ModalMe grossTotal={grossTotal} showModalFn={setShowModal} />
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row>
        <Col sm={12}>
          <TableMe
            updateGrossTotalFn={(total) => setGrossTotal(total)}
            isActive={!showModal}
          />
        </Col>
      </Row>
      {showModal ? (
        <></>
      ) : (
        <Col sm={12}>
          <AlertMe total={grossTotal} showModalFn={setShowModal} />
        </Col>
      )}
    </Container>
  );
}

export default HomePage;
