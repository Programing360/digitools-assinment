import React from "react";
import cartIcon from "../../assets/shopping-cart.png";

const Nav = ({ count }) => {
  return (
   <div className="fixed top-0 z-10 w-full">
     <div className="navbar bg-base-100 shadow container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl pl-3 font-bold bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2 ">
        <div>
          <img className="w-6 mr-4 cursor-pointer relative" src={cartIcon} alt="Shopping Cart" />
          <span className="absolute top-3 ml-3  bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        </div>
        <a className="btn btn-ghost rounded-full">Login</a>
        <a className="btn rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
          Get Started
        </a>
      </div>
    </div>
   </div>
  );
};

export default Nav;
