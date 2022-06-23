import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import logoHeader from "../../assets/images/LogoHeader.png";
import logoWhite from "../../assets/images/logo-white.png";
import CartContext from "../../store/CartContex";

export function NavBarForCart() {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.length;

  return (
    <header className="header js-site-header">
      <div className="header__overlay"></div>
      <div className="wrap">
        <div className="header__container">
          <div className="logo-mobile">
            <Link to="/" className="header__home">
              {" "}
              <img src={logoHeader} alt="" className="header__logo" />{" "}
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="main-nav__list" role="menubar">
              <li className="main-nav__list-item" role="menuitem">
                <Link to="" className="main-nav__list-link">
                  <img src={logoHeader} alt="" className="header__logo" />
                  ABOUT US
                </Link>
              </li>
              <li className="main-nav__list-item" role="menuitem">
                <Link to="" className="main-nav__list-link">
                  <img src={logoHeader} alt="" className="header__logo" />
                  LOCATIONS
                </Link>
              </li>
              <li
                className="main-nav__list-item main-nav__list-item--image"
                role="menuitem"
              >
                <Link to="" className="header__home-logo">
                  <img src={logoWhite} alt="" className="header__logo" />
                </Link>
              </li>
              <li className="main-nav__list-item" role="menuitem">
                <Link to="/" className="main-nav__list-link">
                  SHOP
                </Link>
              </li>
              <li className="main-nav__list-item" role="menuitem">
                <Link to="/" className="main-nav__list-link">
                  <img src={logoHeader} alt="" className="header__logo" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            <Link to="/cart" className="main-nav-cart-link">
              Cart
            </Link>
            <span className="main-nav-cart-qty">{numberOfCartItems}</span>
          </div>
          <Link to="" className="site-header__hamburger hamburger js-menu-btn">
            <span></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
