import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Alexandre Angrignon</h1>
        <p>Based in Auckland</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <br />
        <p>Mobile: 021-254-2572 </p>
        <p>Email: alex040892@gmail.com </p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Designed By Alexandre Angrignon</div>
        <div className="sns-links">
          <a
            href="https://www.facebook.com/alexbenjaminangri"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a
            href="https://twitter.com/92_Angryman"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://github.com/alexangria1992"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square git-footer"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
