import React from "react";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function AlertMe({ total, showModalFn }) {
  return (
    <Alert variant={"dark"}>
      <h2>
        {`Gross Total `}
        <Button variant="dark" size="lg" onClick={(e) => showModalFn(true)}>
          <b>{total}</b>
        </Button>
      </h2>
    </Alert>
  );
}

export default AlertMe;
