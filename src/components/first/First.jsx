import React from "react";
// custom modules
// import { Calculator } from "../../modules/Calculator";
// custom components
import Number from "../numbers/Number";

const First = () => {
  // const calc = new Calculator();
  const SOME_TEXT = "Hello World!";
  const arrayNumber = [1, 3, 2, 5];
  // function calcTwoNumbers(a, b) {
  //   return a + b;
  // }
  return (
    <>
      <h2>{SOME_TEXT}</h2>
      <div>
        {/* <p>{calcTwoNumbers(2, 4)}</p>
        <p>{calc.sum(3, 2)}</p> */}
      </div>
      <div>
        {arrayNumber.map((el) => {
          return <Number number={el} key={el} />;
        })}
      </div>
      <h2>test</h2>
    </>
  );
};

export default First;
