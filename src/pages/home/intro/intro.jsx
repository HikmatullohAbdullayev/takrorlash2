import React from "react";
import "./intor.css"
import  introImg from "../../../assets/img/hero-img.png"
import { ArrowIcon } from "../../../assets/icon/arrowIcon.jsx"
import "../../../config/global.css"
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="intro-container container">
        <div className="arrows">
          <span className="arrow-left"><ArrowIcon/></span>
          <span className="arrow-rigth"><ArrowIcon/></span>
        </div>
        <div className="intro-box">
          <img src={introImg} alt="img" />
          <div className="intro-content">
            <h2 className="intro-sub-title">IKIGAI</h2>
            <h1 className="intro-title">Leather bags worth hugging.</h1>
            <p className="intro-text">Keep your everyday style chic and on-trend with our selection 20+ styles to choose from. </p>
            <Link to="product" >See Collection</Link>
          </div>
        </div>
        </div>
        
        
      </section>
    </>
  );
};