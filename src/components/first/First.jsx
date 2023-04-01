import React from "react";
// import custom modules
import { Calculator } from "../../modules/Calculator";

const First = () => {
  const calc = new Calculator();
  const SOME_TEXT = "Hello World!";
  const arrayNumber = [1, 3, 2, 5];
  function calcTwoNumbers(a, b) {
    return a + b;
  }
  return (
    <>
      <h2>{SOME_TEXT}</h2>
      <div>
        <p>{calcTwoNumbers(2, 4)}</p>
        <p>{calc.sum(3, 2)}</p>
      </div>
      <div>
        {arrayNumber.map((el) => {
          return <p key={el}>{el}</p>;
        })}
      </div>
      <h2>test</h2>
    </>
  );
};

export default First;
