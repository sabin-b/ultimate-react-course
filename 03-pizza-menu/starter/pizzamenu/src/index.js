import react from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);

// * before react 18
// ReactDOM.render(<App />, document.getElementById("root"));
