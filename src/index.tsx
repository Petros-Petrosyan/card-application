import { StrictMode } from "react";
import { MainContextProvider } from "context/main";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Main from "pages/Main";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <MainContextProvider>
      <Main />
    </MainContextProvider>
  </StrictMode>
);

reportWebVitals();
