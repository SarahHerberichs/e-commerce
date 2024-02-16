import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Importez le hook useSelector
import "./banner.css";
function Banner() {
  const firstName = useSelector((state) => state.profile.firstname);
  return (
    <header>
      <h1>
        <Link to="/home">Home</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/profile">Profile</Link>
      </h1>
      <p>Welcome, {firstName}</p>
    </header>
  );
}
export default Banner;
