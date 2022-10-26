import React from "react";
import { default as bemCssModules } from "bem-css-modules";
import { default as ButtonStyles } from "./Button.module.scss";

type CalculatorFunction = () => void;
type ConcatenateFunction = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

//Pokazuje jak props ma wyglądać
interface ButtonProps {
  content: string;
  isEqual?: boolean;
  isDisabled?: boolean;
  isLighter?: boolean;
  isMemory?: boolean;
  onClick: CalculatorFunction | ConcatenateFunction;
}

const style = bemCssModules(ButtonStyles);

export const Button: React.FC<ButtonProps> = (props) => {
  const modifiers = {
    "is-equal": props.isEqual,
    "is-disabled": props.isDisabled,
    "is-lighter": props.isLighter,
    "is-memory": props.isMemory,
  };

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    props.onClick(event);
  };

  return (
    <button className={style(modifiers)} onClick={onClickHandler}>
      {props.content}
    </button>
  );
};
