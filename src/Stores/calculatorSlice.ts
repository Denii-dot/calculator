import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Calculator {
  memory: Array<number>;
  disabledMemoryButton: boolean;
  displayValue: string | undefined;
  previousValue: number | null;
  currentFunction: string | null;
}

const initialState: Calculator = {
  memory: [0],
  disabledMemoryButton: true,
  displayValue: "0",
  previousValue: null,
  currentFunction: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    concatenateNumber: (state, action: PayloadAction<string>) => {
      state.displayValue =
        state.displayValue === "0"
          ? action.payload
          : state.displayValue + action.payload;
    },
    removeOneNumber: (state) => {
      if (state.displayValue.includes("Infi")) {
        state.displayValue = "0";
      } else {
        state.displayValue = !(
          (state.displayValue as string) && !(state.displayValue?.length === 1)
        )
          ? "0"
          : state.displayValue?.slice(0, -1);
      }
    },
    removeNumberWithC: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.previousValue = null;
        state.currentFunction = null;
      }
      state.displayValue = "0";
    },
    fractionFromNumber: (state) => {
      state.displayValue = String(1 / Number(state.displayValue));
    },
    squareNumber: (state) => {
      state.displayValue = String(Math.pow(Number(state.displayValue), 2));
    },
    selectedFunction: (state, action: PayloadAction<string>) => {
      if (state.currentFunction) {
        if (state.currentFunction === "%") {
          state.previousValue =
            state.previousValue * (Number(state.displayValue) / 100);
        } else {
          state.previousValue = eval(
            `${state.previousValue} ${state.currentFunction} ${state.displayValue}`
          );
        }
      } else {
        state.previousValue = Number(state.displayValue);
      }
      state.currentFunction = action.payload;
      state.displayValue = "0";
    },
    addComma: (state) => {
      state.displayValue = state.displayValue.includes(".")
        ? state.displayValue
        : state.displayValue + ".";
    },
    changeSingh: (state) => {
      if (state.displayValue.includes("-")) {
        state.displayValue = state.displayValue.substring(1);
      } else if (state.displayValue !== "0") {
        state.displayValue = "-".concat(state.displayValue);
      }
    },
    amount: (state) => {
      if (state.currentFunction || state.previousValue) {
        if (state.currentFunction === "%") {
          state.displayValue = String(
            state.previousValue * (Number(state.displayValue) / 100)
          );
        } else {
          state.displayValue = eval(
            `${state.previousValue} ${state.currentFunction} ${state.displayValue}`
          );
        }
        state.currentFunction = null;
        state.previousValue = null;
      }
    },
    root: (state) => {
      state.displayValue = String(Math.sqrt(Number(state.displayValue)));
    },
    addOrSubstractMemory: (state, action: PayloadAction<string>) => {
      state.disabledMemoryButton = false;
      let lastOneElement = state.memory[state.memory.length - 1];
      let newValue = eval(
        `${lastOneElement} ${action.payload} ${state.displayValue}`
      );
      let newArray = [...state.memory];
      newArray.pop();
      state.memory = [...newArray, newValue];
      state.displayValue = "0";
    },
    clearAllMemory: (state) => {
      state.memory = [0];
      state.disabledMemoryButton = true;
    },
    saveInMemory: (state) => {
      state.memory = [...state.memory, Number(state.displayValue)];
      state.displayValue = "0";
      state.disabledMemoryButton = false;
    },
    showTheLastOne: (state) => {
      state.displayValue = String(state.memory.slice(-1));
    },
  },
});

export const {
  concatenateNumber,
  removeOneNumber,
  removeNumberWithC,
  fractionFromNumber,
  squareNumber,
  selectedFunction,
  addComma,
  changeSingh,
  amount,
  root,
  addOrSubstractMemory,
  clearAllMemory,
  saveInMemory,
  showTheLastOne,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
