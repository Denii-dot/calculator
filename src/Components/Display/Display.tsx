import React from "react";
import { default as bemCssModules } from "bem-css-modules";
import { useSelector } from "react-redux";
import { selectedCalculator } from "../../Stores/store";
import { default as DisplayStyles } from "./Display.module.scss";

const style = bemCssModules(DisplayStyles);

export const Display: React.FC = () => {
  const calculator = useSelector(selectedCalculator);
  return (
    <div className={style()}>
      <div>
        <div className={style("last")}>
          {calculator.previousValue} {calculator.currentFunction}
        </div>
        <div className={style("current")}>{calculator.displayValue}</div>
      </div>
    </div>
  );
};
