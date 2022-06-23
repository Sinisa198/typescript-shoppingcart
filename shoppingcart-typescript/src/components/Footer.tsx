import React from "react";

import logoFooter from "../assets/images/LogoFooter.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__wrap">
          <div className="footer__logo">
            <a href="/" className="header__home">
              <img src={logoFooter} alt="" />
            </a>
          </div>
          <div className="copyright">
            <span>Copyright © 2022 forwardslashny.com</span>{" "}
            <span className="copyright-line">|</span>{" "}
            <span>All Rights Reservsed.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
