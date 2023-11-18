/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from '../../shared/menuitems/MenuItem';
import CoverSectionBanner from '../../shared/coverSection/CoverSectionBanner';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, details, image}) => {
    return (
        <div className='p-8'>
            { title && <CoverSectionBanner image={image} title={title} details={details}></CoverSectionBanner>}
             <div className="grid md:grid-cols-2 gap-6 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <Link to={`/order/${title}`}>
     <button className="btn btn-outline border-0 border-b-8 font-semibold text-[20px]">
            Order Your Food
          </button></Link>
        </div>
    );
};

export default MenuCategory;