import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";

function footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__logo">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Practicant</h1>
            </div>
          </div>
          <div class="list">
            <ul>
              <li id="head">About Us</li>
              <li>About Us</li>
              <li>Mentor's Thought</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li id="head">About Us</li>
              <li>About Us</li>
              <li>Mentor's Thought</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li id="head">About Us</li>
              <li>About Us</li>
              <li>Mentor's Thought</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li id="head">About Us</li>
              <li>About Us</li>
              <li>Mentor's Thought</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className="footer__user">
            <h1>Get Going</h1>
            <h6>Sign In</h6>
            <h5>Sign Up</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
