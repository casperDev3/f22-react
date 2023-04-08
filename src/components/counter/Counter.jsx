import React, { useState, useEffect, useMemo } from "react";
import s from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
  });
  // on load
  useEffect(() => {
    console.log("useEffect");
  }, []);
  let total = useMemo(() => {
    return counter + 1;
  }, [counter]);
  return (
    <>
      <div className={s.counter}>
        <div className={s.title__counter}>
          {counter} {total}
        </div>
        <div className={s.title}>Title Counter</div>
        <button
          onClick={(e) => {
            setCounter(counter + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={(e) => {
            setCounter(counter - 1);
          }}
        >
          -1
        </button>
      </div>
      <form>
        <input
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
          type="text"
        />
        <input
          onChange={(e) => {
            setUserData({ ...userData, surname: e.target.value });
          }}
          type="text"
        />
      </form>
      <p>{userData.name}</p>
      <p>{userData.surname}</p>
    </>
  );
};

export default Counter;
