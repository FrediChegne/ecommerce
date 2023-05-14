import React from "react";

import {
  Copyright,
  Facebook,
  Github,
  Twitter,
  Whatsapp,
} from "../../assets/Icon/icons";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-social-media">
        <Whatsapp />
        <Facebook />
        <Twitter />
        <a href="https://github.com/FrediChegne/ecommerce" alt="github page" target="_blank" rel="noreferrer"><Github /></a>
      </div>
      <div className="copyright">
        <Copyright /> <span>2023</span>
      </div>
    </footer>
  );
};

export default Footer;
