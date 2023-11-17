import { Link } from "react-router-dom/dist";
import "../../config/global.css"
import React from "react";
import { Header } from "../../layout/header";
import { Intro } from "./intro";
import { Product } from "./product";
import { Discount } from "./discount"
import { Join } from "./join"
import { Exquisite } from "./exquisite"
import { Footer } from "../../layout/footer"
export const Home = () => {
  return (
    <>
    {/* <div className="container"> */}

        <Intro/>
        <Product/>
        <Discount/>
        <Join/>
        <Exquisite/>
    
      
    {/* </div> */}
    </>
  );
}; 
