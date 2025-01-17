import { useState } from "react";
import "./AppHeader.css";
import App from "./App";


function AppHeader() {
  
  console.log("Component got rendered");
  return (
    <div>
    <div className="header">
    <a href="#default" className="logo">Create Rules</a>
    <div className="header-right">
      <a className="active" href="#home">Alerts</a>
      <a href="#contact">Trades</a>
      <a href="#about">portfolio</a>
    </div>
  </div>
    <div>
        <App />
    </div>
  </div>
  );
}

export default AppHeader;