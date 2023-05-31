import {
  ADD_NUMBER,
  ADD_STORED_NUMBERS,
  REMOVE_NUMBER,
  SORT_NUMBERS,
  REMOVE_ALL_NUMBERS,
} from "./actionTypes";

export const addNumber = (number: number) => {
  return {
    type: ADD_NUMBER,
    payload: { number },
  };
};

export const removeNumber = (index: number) => {
  return {
    type: REMOVE_NUMBER,
    payload: { index },
  };
};

export const sortNumbers = () => {
  return {
    type: SORT_NUMBERS,
  };
};

export const addStoredNumbers = () => {
  return {
    type: ADD_STORED_NUMBERS,
  };
};

export const removeAllNumbers = () => {
  return {
    type: REMOVE_ALL_NUMBERS,
  };
};
