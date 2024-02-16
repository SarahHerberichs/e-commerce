import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Basket from "./views/Basket";
import "./App.css";
import Banner from "./components/Banner";
import Profile from "./views/Profile";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <div className="Container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
