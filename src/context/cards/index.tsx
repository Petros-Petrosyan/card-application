import { createContext, ReactElement, useReducer, Dispatch } from "react";
import { CardActions, CardsContextValue, CardsState } from "types/cards";
import { reducer } from "./reducer";

const initialState: CardsState = {
  cards: [],
};

export const CardsContext = createContext<CardsContextValue>({
  ...initialState,
  dispatch: () => {},
});

export const CardsContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: CardsContextValue = {
    ...state,
    dispatch: dispatch as Dispatch<CardActions>,
  };

  return (
    <CardsContext.Provider value={contextValue}>
      {children}
    </CardsContext.Provider>
  );
};
