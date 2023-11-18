/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px] h-[104px]  bg-[#D9D9D9]"
        src={image}
      />
      <div>
        <h1 className="uppercase text-[#151515] text-[20px] font-medium">
          {name}-------
        </h1>
        <p className="text-[#737373] font-normal">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-[20px] font-normal">${price}</p>
    </div>
  );
};

export default MenuItem;
