import React from "react";
import s from "./Counter.module.scss";

const Counter = () => {
  return (
    <>
      <div className={s.title}>Title Counter</div>
      <div className={s.title__counter}>0</div>
    </>
  );
};

export default Counter;
