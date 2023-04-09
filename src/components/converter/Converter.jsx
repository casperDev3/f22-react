import React from "react";
import s from "./Converter.module.scss";
// bootstrap components
import { Button, Col, Row, Container } from "react-bootstrap";

const ConverterUAH = () => {
  return (
    <>
      <div className={s.converter}>
        <Container>
          <Row>
            <Col xs={6}>
              <form>
                <legend className="mb-3">Конвертер валют</legend>
                <fieldset className="d-flex flex-column mb-3">
                  <label htmlFor="">From</label>
                  <select name="" id="">
                    <option value="">USD</option>
                    <option value="">EUR</option>
                  </select>
                </fieldset>
                <fieldset className=" d-flex flex-column mb-3">
                  <label htmlFor="">To</label>
                  <select name="" id="">
                    <option value="">UAH</option>
                  </select>
                </fieldset>
                <fieldset className="d-flex flex-column mb-3">
                  <label htmlFor="">Amount</label>
                  <input type="number" />
                </fieldset>
                <Button variant="success">Reverse</Button>
              </form>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={6}
            >
              <h2>Результат</h2>
              <h1>
                <span>1</span> USD = <span>27.5</span> UAH
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ConverterUAH;
