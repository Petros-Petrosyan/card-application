import {
  ADD_NUMBER,
  ADD_STORED_NUMBERS,
  REMOVE_ALL_NUMBERS,
  REMOVE_NUMBER,
  SORT_NUMBERS,
} from "./actionTypes";

const addNumber = (
  state: { numbers: number[] },
  payload: { number: number }
) => {
  const { number } = payload;
  const newNumbers = [number, ...state.numbers];
  localStorage.setItem("numbers", JSON.stringify(newNumbers));

  return {
    ...state,
    numbers: newNumbers,
  };
};

const removeNumber = (
  state: { numbers: number[] },
  payload: { index?: number }
) => {
  const { index } = payload;
  const newNumbers = state.numbers.filter((_el, i) => i !== index);
  localStorage.setItem("numbers", JSON.stringify(newNumbers));

  return {
    ...state,
    numbers: newNumbers,
  };
};

const sortNumbers = (state: { numbers: number[] }) => {
  const sortedNumbers = state.numbers.sort((a, b) => a - b);
  localStorage.setItem("numbers", JSON.stringify(sortedNumbers));

  return {
    ...state,
    numbers: sortedNumbers,
  };
};

const removeAllNumbers = (state: { numbers: number[] }) => {
  localStorage.setItem("numbers", JSON.stringify([]));

  return {
    ...state,
    numbers: [],
  };
};

const addStoredNumbers = (state: { numbers: number[] }) => {
  const initialNumbers = localStorage.getItem("numbers");

  return {
    ...state,
    numbers: initialNumbers ? JSON.parse(initialNumbers) : state.numbers,
  };
};

export const reducer = (
  state: { numbers: number[] },
  action: { type: string; payload: { number: number; index?: number } }
) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NUMBER:
      return addNumber(state, payload);
    case REMOVE_NUMBER:
      return removeNumber(state, payload);
    case SORT_NUMBERS:
      return sortNumbers(state);
    case ADD_STORED_NUMBERS:
      return addStoredNumbers(state);
    case REMOVE_ALL_NUMBERS:
      return removeAllNumbers(state);
    default:
      return state;
  }
};
