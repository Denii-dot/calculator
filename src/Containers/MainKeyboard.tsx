import React from "react";
import { default as bemCssModules } from "bem-css-modules";
import { useDispatch } from "react-redux";
import { Button } from "../Components/Button/Button";
import {
  concatenateNumber,
  removeOneNumber,
  fractionFromNumber,
  removeNumberWithC,
  squareNumber,
  selectedFunction,
  addComma,
  changeSingh,
  amount,
  root,
} from "../Stores/calculatorSlice";

import { default as MainKeyboardStyle } from "./MainKeyboard.module.scss";

const style = bemCssModules(MainKeyboardStyle);

export const MainKeyboard: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={style()}>
      <Button content="%" onClick={() => dispatch(selectedFunction("%"))} />
      <Button content="CE" onClick={() => dispatch(removeNumberWithC(false))} />
      <Button content="C" onClick={() => dispatch(removeNumberWithC(true))} />
      <Button content="<=" onClick={() => dispatch(removeOneNumber())} />
      <Button content="1/x" onClick={() => dispatch(fractionFromNumber())} />
      <Button content="√" onClick={() => dispatch(root())} />
      <Button content="sqrt" onClick={() => dispatch(squareNumber())} />
      <Button content="/" onClick={() => dispatch(selectedFunction("/"))} />
      <Button content="7" onClick={() => dispatch(concatenateNumber("7"))} />
      <Button content="8" onClick={() => dispatch(concatenateNumber("8"))} />
      <Button content="9" onClick={() => dispatch(concatenateNumber("9"))} />
      <Button content="X" onClick={() => dispatch(selectedFunction("*"))} />
      <Button content="4" onClick={() => dispatch(concatenateNumber("4"))} />
      <Button content="5" onClick={() => dispatch(concatenateNumber("5"))} />
      <Button content="6" onClick={() => dispatch(concatenateNumber("6"))} />
      <Button content="-" onClick={() => dispatch(selectedFunction("-"))} />
      <Button content="1" onClick={() => dispatch(concatenateNumber("1"))} />
      <Button content="2" onClick={() => dispatch(concatenateNumber("2"))} />
      <Button content="3" onClick={() => dispatch(concatenateNumber("3"))} />
      <Button content="+" onClick={() => dispatch(selectedFunction("+"))} />
      <Button content="+/-" onClick={() => dispatch(changeSingh())} />
      <Button content="0" onClick={() => dispatch(concatenateNumber("0"))} />
      <Button content="." onClick={() => dispatch(addComma())} />
      <Button content="=" onClick={() => dispatch(amount())} isEqual />
    </div>
  );
};
