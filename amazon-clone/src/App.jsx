import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeaderBottom from "./components/header/HeaderBottom";

function App() {
  return (
    <div className="font-bodyFont">
      <Header />
      <HeaderBottom />
    </div>
  );
}

export default App;
