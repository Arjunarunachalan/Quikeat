import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RestorentCard from "./components/RestorentCardList.jsx";
import Sidedrawer from "./layouts/Sidedrawer.jsx";
import Nav from "./layouts/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Sidedrawer /> */}
    {/* <Nav /> */}
  </React.StrictMode>
);
