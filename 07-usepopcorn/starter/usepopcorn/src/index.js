import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import { StarRating } from "./components/reusable/StarRating";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);

// function Test() {
//   let [movieRating, setMovieRate] = useState(0);

//   return (
//     <>
//       <StarRating
//         color="pink"
//         onSetRating={setMovieRate}
//         size={20}
//         maxRating={10}
//       />
//       <p>you have given {movieRating}</p>
//     </>
//   );
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
