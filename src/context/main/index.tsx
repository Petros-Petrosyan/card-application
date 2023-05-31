import { createContext, ReactElement, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  numbers: [],
};

export const MainContext = createContext(initialState as any);

export const MainContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
