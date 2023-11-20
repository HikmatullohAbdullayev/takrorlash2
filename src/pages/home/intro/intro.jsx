import React from "react";
import "./intor.css"
import  introImg from "../../../assets/img/hero-img.png"
import { ArrowIcon } from "../../../assets/icon/arrowIcon.jsx"
import "../../../config/global.css"
import { Link } from "react-router-dom";
import { NikeIcon } from "../../../assets/icon/nikeIcon"
import { HushIcon } from "../../../assets/icon/hushIcon"
import { PumaIcon } from "../../../assets/icon/pumaIcon"
import { ShoeiIcon } from "../../../assets/icon/shoeiIcon"
import { MarcIcon } from "../../../assets/icon/marcIcon.jsx"
import { SupermeIcon } from "../../../assets/icon/suprmeIcon.jsx"

export const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="intro-container container">
        <div className="intro-box">
        <div className="arrows">
        <button className="arrow-left intro-btn"><ArrowIcon/></button>
          <button className="arrow-rigth intro-btn"><ArrowIcon/></button>
        </div>
          <div className="img-block"><img className="intro-img" src={introImg} alt="img" /></div>
          <div className="intro-content">
            <h2 className="intro-sub-title">IKIGAI</h2>
            <h1 className="intro-title">Leather bags worth hugging.</h1>
            <p className="intro-text">Keep your everyday style chic and on-trend <br/> with our selection 20+ styles to choose from. </p>
            <Link to="product" className="intro-link" >See Collection</Link>
          </div>
        </div>

        <div className="partners">
        <button className="arrow-left partners-btn"><ArrowIcon/></button>
          <ul className="logos">
            <li className="brand"> <NikeIcon/> </li>
            <li className="brand"> <HushIcon/> </li>
            <li className="brand"> <PumaIcon/> </li>
            <li className="brand"> <ShoeiIcon/> </li>
            <li className="brand"> <MarcIcon/> </li>
            <li className="brand"> <SupermeIcon/> </li>

          </ul>
          <button className="arrow-rigth partners-btn"><ArrowIcon/></button>
        </div>
        </div>
        
        
      </section>
    </>
  );
};