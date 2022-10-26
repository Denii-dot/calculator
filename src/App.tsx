import React from "react";
import { default as bemCssMdoules } from "bem-css-modules";
import { Display } from "./Components/Display/Display";
import { MemoryContainer } from "./Containers/MemoryContainer";
import { MainKeyboard } from "./Containers/MainKeyboard";
import { default as AppStyles } from "./App.module.scss";

const style = bemCssMdoules(AppStyles);

bemCssMdoules.setSettings({
  modifierDelimiter: "--",
});

function App() {
  return (
    <div className={style()}>
      <Display />
      <MemoryContainer />
      <MainKeyboard />
    </div>
  );
}

export default App;
