import React from "react";
import { Link } from "react-router-dom/dist";
import logoIgm from "../../assets/img/logo.png";
import "../../config/global.css"
import "./header.css"
import { SearchIcon } from "../../assets/icon/searchIcon"
import { UserIcon } from "../../assets/icon/userIcon";
import { LikeIcon } from "../../assets/icon/likeIcon"
import { ShopIcon } from "../../assets/icon/shopIcon"
export const Header = () => {
  return (
    <>
      <header className="header container ">
       <div className="header__container">
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
            <button className="header_icon header_button">  <SearchIcon/></button>{" "}
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"profile"}>
              {" "}
              <span className="header_icon">  <UserIcon/> </span>{" "}
            </Link>
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"selected"}>
              {" "}
              <span className="header_icon"> <LikeIcon/> </span>{" "}
            </Link>
          </li>
          <li className="icon-item">
            {" "}
            <Link className="item-link" to={"korzinka"}>
              {" "}
              <span className="header_icon"> <ShopIcon/>  <sup className="shop_count">1 </sup> </span>{" "}
            </Link>
          </li>
        </ul>
       </div>
      </header>
    </>
  );
};
