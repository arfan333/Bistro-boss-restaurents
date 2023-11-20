/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaHome,
  FaList,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaBagShopping, FaBook, FaCalendarDays } from "react-icons/fa6";
import { FcAddRow } from "react-icons/fc";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import useCart from "../../customsHooks/useCartHooks/useCart";
import { MdEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../customsHooks/useAdminHooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 gap-3 text-[16px] text-[#151515]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList> Manage Items
                  {/* <span className="text-[20px] text-[#D1A054]">
                    ({cart.length})
                  </span> */}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils> Add items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook></FaBook> Manage bookings
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="text-[20px] text-[#D1A054]">
                    ({cart.length})
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaCalendarDays /> PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FcAddRow /> Add review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>
                  <TbBrandBooking /> My booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared nav links panel */}
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <IoMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <MdEmail /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaBagShopping /> Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
