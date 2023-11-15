import React from "react";
import { Link } from "react-router-dom/dist";
import logoIgm from "../../assets/img/logo.png";
export const Header = () => {
  return (
    <>
      <header className="header">
        <a className="header__logo-link" href="#">
          <img className="header__logo" src={logoIgm} alt="logo" />
        </a>
        <nav className="header__nav nav">
          <ul className="nav__list list">
            <li className="list__item">
              <Link className="item__link" to={"home"}>
                Home
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to={"shop"}>
                Shop
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to={"product"}>
                Product
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to={"page"}>
                Page
              </Link>
            </li>
          </ul>
        </nav>
       

        <ul className="icon-box">
          <li className="icon-item"></li>
          <li className="icon-item">
            {" "}
            <span className="header_icon"> icon </span>{" "}
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"profile"}>
              {" "}
              <span className="header_icon"> icon </span>{" "}
            </Link>
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"selected"}>
              {" "}
              <span className="header_icon"> icon </span>{" "}
            </Link>
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"korzinka"}>
              {" "}
              <span className="header_icon"> icon  <sup className="shop_count">0 </sup> </span>{" "}
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};
