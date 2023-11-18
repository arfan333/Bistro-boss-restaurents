/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SubTitleSection = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10 border-y-4 w-[428px] mx-auto py-2">
   <p className="text-yellow-500">---{subHeading}---</p>
   <h3 className="text-[#151515] text-[40px] font-normal">{heading}</h3>
    </div>
  );
};

export default SubTitleSection;
