import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Candies } from "./1-candies";
import { Rectangles } from "./2-rectangles";
import { Timers } from "./3-timers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "1-candies",
    element: <Candies />,
  },
  {
    path: "2-rectangles",
    element: <Rectangles />,
  },
  {
    path: "3-timers",
    element: <Timers />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
