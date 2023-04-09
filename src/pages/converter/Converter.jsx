import React from "react";
import s from "./Converter.module.scss";
// custom components
import ConverterUAH from "../../components/converter/Converter";

const Converter = () => {
  return (
    <>
      <div className={s.converter}>
        <ConverterUAH />
      </div>
    </>
  );
};

export default Converter;
