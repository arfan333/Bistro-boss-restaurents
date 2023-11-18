/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Parallax } from 'react-parallax';

const CoverSectionBanner = ({image, title, details}) => {
  return (
    <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={image}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
      className="hero h-[700px]"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
          {details}
          </p>
          
        </div>
      </div>
    </div>
    </Parallax>
   
  );
};

export default CoverSectionBanner;
