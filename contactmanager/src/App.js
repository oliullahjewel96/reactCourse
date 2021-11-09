import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContacts from "./components/contacts/AddContacts";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Header branding="Contact manager" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Contacts />} />{" "}
              <Route path="/contact/add/*" element={<AddContacts />} />{" "}
              <Route path="about/*" element={<About />} />{" "}
            </Routes>{" "}
          </div>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </Provider>
  );
}

export default App;
