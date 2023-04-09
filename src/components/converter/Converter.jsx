import React, { useState, useEffect, useMemo } from "react";
import s from "./Converter.module.scss";
// bootstrap components
import { Button, Col, Row, Container } from "react-bootstrap";

const ConverterUAH = () => {
  // state
  const [currency, setCurrency] = useState([]);
  const [currencyTo, setCurrencyTo] = useState([
    { cc: "UAH", txt: "Українська гривня", rate: 1, r030: 12112 },
  ]);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(currencyTo[0]);
  const [amount, setAmount] = useState(null);
  // fetch data from API
  function getCurrency() {
    const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory";
    fetch(`${BASE_URL}/exchange?json`)
      .then((response) => response.json())
      .then((data) => setCurrency(data));
  }
  // set actual currency
  function setActualCurrency(cc) {
    const actualCurrency = currency.find((item) => item.cc === cc);
    setFrom(actualCurrency);
  }
  // reverse currency
  function reverseCurrency() {
    let temp = currency;
    setCurrency(currencyTo);
    setCurrencyTo(temp);
    temp = from;
    setFrom(to);
    setTo(temp);
  }
  // on load component
  useEffect(() => {
    getCurrency();
  }, []);
  // on change
  let result = useMemo(() => {
    if (from && amount && to) {
      return (amount * (from.rate / to.rate)).toFixed(2);
    } else if (from) {
      return (from.rate / to?.rate || 1).toFixed(2);
    }
  }, [amount, from, to]);
  return (
    <>
      <div className={s.converter}>
        <Container className="mt-4">
          <Row>
            <Col xs={6}>
              <form>
                <legend className="mb-3">Конвертер валют</legend>
                <fieldset className="d-flex flex-column mb-3">
                  <label htmlFor="">From</label>
                  <select
                    onChange={(e) => {
                      setActualCurrency(e.target.value);
                    }}
                    name=""
                    id=""
                  >
                    <option value={"none"} selected disabled hidden>
                      Currency choice
                    </option>
                    {currency.map((item) => {
                      return (
                        <option key={item.r030} value={item.cc}>
                          {item.txt}
                        </option>
                      );
                    })}
                  </select>
                </fieldset>
                <fieldset className=" d-flex flex-column mb-3">
                  <label htmlFor="">To</label>
                  <select
                    onChange={(e) => {
                      setTo(
                        currencyTo.find((item) => item.cc === e.target.value)
                      );
                    }}
                    name=""
                    id=""
                  >
                    {currencyTo.map((item) => {
                      return (
                        <option key={item.r030} value={item.cc}>
                          {item.txt}
                        </option>
                      );
                    })}
                  </select>
                </fieldset>
                <fieldset className="d-flex flex-column mb-3">
                  <label htmlFor="">Amount</label>
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                  />
                </fieldset>
                <Button onClick={reverseCurrency} variant="success">
                  Reverse
                </Button>
              </form>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={6}
            >
              {/* if from != null */}

              {from ? (
                <>
                  <h2>{amount ? "Результат" : "Курс"}</h2>
                  <h1>
                    <span>{amount ? amount : "1"}</span> {from.cc} ={" "}
                    <span>{result}</span> {to?.cc || "UAH"}
                  </h1>
                </>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ConverterUAH;
