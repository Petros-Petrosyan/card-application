import { Card } from "types/cards";
import {
  INITIATE_CARDS,
  ADD_CARD,
  REMOVE_CARD,
  REMOVE_ALL_CARDS,
  SORT_CARDS,
} from "./actionTypes";

export const initiateCards = () => {
  return {
    type: INITIATE_CARDS,
  };
};

export const addCard = (card: Card) => {
  return {
    type: ADD_CARD,
    payload: card,
  };
};

export const removeCard = (card: Card) => {
  return {
    type: REMOVE_CARD,
    payload: card,
  };
};

export const removeAllCards = () => {
  return {
    type: REMOVE_ALL_CARDS,
  };
};

export const sortCards = () => {
  return {
    type: SORT_CARDS,
  };
};
