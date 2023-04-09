import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// router components
import RouterApp from "./router/index";
// layout components
import Header from "./layouts/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
