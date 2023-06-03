import { Dispatch } from "react";

export interface Card {
  id: string;
  number: number;
}

export interface CardsState {
  cards: Card[];
}

export interface CardActions {
  type: string;
  payload?: Card;
}

export interface CardsContextValue extends CardsState {
  dispatch: Dispatch<CardActions>;
}
