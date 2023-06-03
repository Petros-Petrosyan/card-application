import { Card, CardsState } from "types/cards";
import {
  INITIATE_CARDS,
  ADD_CARD,
  REMOVE_CARD,
  REMOVE_ALL_CARDS,
  SORT_CARDS,
} from "./actionTypes";

const initiateCards = (state: CardsState) => {
  const initialCards = localStorage.getItem("cards");

  return {
    ...state,
    cards: initialCards ? JSON.parse(initialCards) : state.cards,
  };
};

const addCard = (state: CardsState, payload: Card) => {
  const { number, id } = payload;

  const newCards = [{ number, id }, ...state.cards];
  localStorage.setItem("cards", JSON.stringify(newCards));

  return {
    ...state,
    cards: newCards,
  };
};

const removeCard = (state: CardsState, payload: Card) => {
  const { id } = payload;

  const newCards = state.cards.filter((card) => card.id !== id);
  localStorage.setItem("cards", JSON.stringify(newCards));

  return {
    ...state,
    cards: newCards,
  };
};

const removeAllCards = (state: CardsState) => {
  localStorage.setItem("cards", JSON.stringify([]));

  return {
    ...state,
    cards: [],
  };
};

const sortCards = (state: CardsState) => {
  const sortedCards = state.cards.sort((a, b) => a.number - b.number);
  localStorage.setItem("cards", JSON.stringify(sortedCards));

  return {
    ...state,
    cards: sortedCards,
  };
};

export const reducer = (
  state: CardsState,
  action: { type: string; payload: Card }
) => {
  const { type, payload } = action;

  switch (type) {
    case INITIATE_CARDS:
      return initiateCards(state);
    case ADD_CARD:
      return addCard(state, payload);
    case REMOVE_CARD:
      return removeCard(state, payload);
    case REMOVE_ALL_CARDS:
      return removeAllCards(state);
    case SORT_CARDS:
      return sortCards(state);
    default:
      return state;
  }
};
