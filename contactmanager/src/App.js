import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact manager" />
      <div className="container">
        <Contact name="John" email="john@gamil.com" phone="555-555-5555" />
        <Contact name="oli Ullah" email="oli@gamil.com" phone="01860594161" />
      </div>
    </div>
  );
}

export default App;
