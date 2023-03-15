import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { generate } from "shortid";

function TableMe({ updateGrossTotalFn, isActive }) {
  const [tableData, setTableData] = useState([
    { id: generate(), weight: 0, quantity: 0, total: 0 },
  ]);

  const calculate = (e, element) => {
    e && e.preventDefault();
    let grossTotal = 0;
    if (e?.target?.id && element) {
      const updatedTable = tableData.map((data) => {
        if (data?.id === e?.target?.id) {
          let value = parseFloat(e.target.value);
          value = value > 0 ? value : 0;
          data[element] = value;
          data.total =
            "weight" === element ? value * data.quantity : value * data.weight;
        }

        grossTotal += data.total;
        return data;
      });
      const lastRow = updatedTable[updatedTable.length - 1];
      if (lastRow?.weight > 0 || lastRow?.quantity > 0) {
        updatedTable.push({ id: generate(), weight: 0, quantity: 0, total: 0 });
      }

      setTableData(updatedTable);
      if (updateGrossTotalFn) {
        updateGrossTotalFn(grossTotal);
      }
    }
  };

  const onDelete = (e) => {
    e && e.preventDefault();
    const id = e?.target?.id;
    if (id) {
      const foundIndex = tableData.findIndex((value) => id === value?.id);
      if (foundIndex >= 0) {
        if (updateGrossTotalFn) {
          let grossTotal = 0;
          const newData = [];
          tableData.forEach((data, index) => {
            if (index !== foundIndex) {
              newData.push(data);
              grossTotal += data.total;
            }
          });
          setTableData(newData);
          updateGrossTotalFn(grossTotal);
        }
      }
    }
  };

  if (!isActive) return <></>;

  return (
    <Table striped bordered hover size="sm" variant="light" responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Weight</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tableData) &&
          tableData.map((eachData, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <>
                    <InputGroup size="sm">
                      <FormControl
                        aria-label="Small"
                        value={`` + eachData?.weight}
                        id={eachData?.id}
                        onChange={(e) => calculate(e, "weight")}
                        type="number"
                      />
                    </InputGroup>
                  </>
                </td>
                <td>
                  <>
                    <InputGroup size="sm">
                      <FormControl
                        aria-label="Small"
                        value={`` + eachData?.quantity}
                        id={eachData?.id}
                        onChange={(e) => calculate(e, "quantity")}
                        type="number"
                      />
                    </InputGroup>
                  </>
                </td>
                <td>
                  <>
                    <InputGroup size="sm">
                      <FormControl
                        aria-label="Small"
                        value={eachData?.total}
                        readOnly
                      />
                    </InputGroup>
                  </>
                </td>
                <td>
                  <>
                    {eachData?.weight > 0 || eachData?.quantity > 0 ? (
                      <Button
                        variant="secondary"
                        id={eachData?.id}
                        onClick={onDelete}
                      >
                        -
                      </Button>
                    ) : (
                      <></>
                    )}
                  </>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default TableMe;
