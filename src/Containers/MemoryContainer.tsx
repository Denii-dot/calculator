import React from "react";
import { default as bemCssModules } from "bem-css-modules";
import { Button } from "../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrSubstractMemory,
  clearAllMemory,
  saveInMemory,
  showTheLastOne,
} from "../Stores/calculatorSlice";
import { selectedCalculator } from "../Stores/store";
import { default as MemoryContainerStyle } from "./MemoryContainer.module.scss";

const style = bemCssModules(MemoryContainerStyle);

export const MemoryContainer: React.FC = () => {
  const dispatch = useDispatch();
  const calculator = useSelector(selectedCalculator);

  return (
    <div className={style(MemoryContainerStyle)}>
      <Button
        content="MC"
        isMemory
        onClick={() => dispatch(clearAllMemory())}
        isDisabled={calculator.disabledMemoryButton}
      />
      <Button
        content="MR"
        isMemory
        onClick={() => dispatch(showTheLastOne())}
        isDisabled={calculator.disabledMemoryButton}
      />
      <Button
        content="M+"
        isMemory
        onClick={() => dispatch(addOrSubstractMemory("+"))}
      />
      <Button
        content="M-"
        isMemory
        onClick={() => dispatch(addOrSubstractMemory("-"))}
      />
      <Button content="MS" isMemory onClick={() => dispatch(saveInMemory())} />
    </div>
  );
};
