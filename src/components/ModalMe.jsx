import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

function ModalMe({ grossTotal = 0, showModalFn }) {
  const [multiple, setMutiple] = useState("");

  return (
    <Modal.Dialog size="xl">
      <Modal.Header>
        <Modal.Title>Multiple Total</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup size="md">
          <FormControl
            aria-label="Small"
            value={grossTotal}
            id={`ModalMe_grossTotalId`}
            type="number"
            readOnly
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Body>
        <InputGroup size="md">
          <FormControl
            aria-label="Small"
            value={multiple}
            id={`ModalMe_multipleTotalId`}
            type="number"
            onChange={(e) => setMutiple(e?.target?.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Body>
          <InputGroup size="md">
            <FormControl
              aria-label="Small"
              value={grossTotal * multiple}
              id={`ModalMe_TotalId`}
              type="number"
              readOnly
              placeholder="Total"
            />
          </InputGroup>
        </Modal.Body>
        <Button variant="secondary" onClick={(e) => showModalFn(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ModalMe;
