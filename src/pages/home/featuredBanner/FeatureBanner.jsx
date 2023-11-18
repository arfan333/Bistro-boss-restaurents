/* eslint-disable no-unused-vars */
import React from "react";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import featuredBanner from "../../../assets/home/featured.jpg";
import "./feature.css";

const FeatureBanner = () => {
  return (
    <div className="feature-item bg-fixed py-10 my-16">
      <SubTitleSection
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SubTitleSection>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredBanner} />
        </div>
        <div className="md:ml-10 md:text-white space-y-2">
          <p className="text-[24px] font-normal">May 20, 2023</p>
          <p className="text-[24px] font-normal">WHERE CAN I GET SOME?</p>
          <p className="text-[20px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-8 font-semibold text-[20px] text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
