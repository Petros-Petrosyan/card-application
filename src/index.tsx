import { StrictMode } from "react";
import { CardsContextProvider } from "context/cards";
import ReactDOM from "react-dom/client";
import Main from "pages/Main";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <CardsContextProvider>
      <Main />
    </CardsContextProvider>
  </StrictMode>
);
