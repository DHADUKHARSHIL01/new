import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import Header from "./Header";

let element = document.getElementById("root");
let root = ReactDOM.createRoot(element);
root.render(
  <>
    <Header />
    <Card />
  </>
);
