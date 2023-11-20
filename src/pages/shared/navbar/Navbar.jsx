/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../PROVIDERS/AUTH/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../customsHooks/useCartHooks/useCart";
import useAdmin from "../../../customsHooks/useAdminHooks/useAdmin";
const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/adminHome"}>Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/userHome"}>Dashboard</Link>
        </li>
      )}
      <li>
        <Link to={"/menu"}>OurMenu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>OrderFood</Link>
      </li>
      <li>
        <Link to={"/dashboard/cart"} className="btn mr-4">
          <FaShoppingCart className="text-[24px] mr-2"></FaShoppingCart>
          <div className="badge badge-secondary text-[20px]">
            +{cart.length}
          </div>
        </Link>
      </li>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button
            onClick={handleSignOut}
            className="btn btn-active btn-neutral text-[20px] text-white
        "
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Sign In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-xl opacity-40 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[20px] text-[#FFF]"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl text-[#FFF]"
        >
          BISTRO BOSS <br />
          Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-[20px] text-[#FFF] menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
