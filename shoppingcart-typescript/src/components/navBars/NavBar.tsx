import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store/CartContex";
import logoHeader from "../../assets/images/LogoHeader.png";

export function NavBar() {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.length;

  return (
    <header className="header js-site-header">
      <div className="header__overlay"></div>
      <div className="wrap">
        <div className="header__container">
          <div className="header__home-logo">
            <Link to="/" className="header__home">
              {" "}
              <img src={logoHeader} alt="" className="header__logo" />{" "}
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="main-nav__list" role="menubar">
              <li className="main-nav__list-item" role="menuitem">
                <Link to="/favorite" className="main-nav__list-link">
                  FAVORITE
                </Link>
              </li>
              <li className="main-nav__list-item" role="menuitem">
                <a href="" className="main-nav__list-link">
                  LOCATIONS
                </a>
              </li>
              <li className="main-nav__list-item" role="menuitem">
                <Link to="/" className="main-nav__list-link">
                  SHOP
                </Link>
              </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            <Link className="main-nav-cart-link" to="/cart">
              Cart
            </Link>
            <span className="main-nav-cart-qty">{numberOfCartItems}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
