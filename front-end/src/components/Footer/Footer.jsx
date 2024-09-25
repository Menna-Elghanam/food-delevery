import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sed
            placeat necessitatibus in reiciendis nobis repudiandae delectus
            dolore sunt libero aliquid asperiores iste voluptates, similique
            tempore at quo explicabo ullam!
          </p>
          <div className="footer-social-media">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+2 764-345-754</li>
            <li>company@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-rights">
        Copyright 2024 company.com -All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
