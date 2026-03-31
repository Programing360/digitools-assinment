import React from "react";
import userIcon from "../../../assets/user.png";
import products from "../../../assets/package.png";
import racket from "../../../assets/rocket.png";

const PremiumCart = () => {
  return (
    <div className="container mx-auto px-4 my-30 ">
      <h1 className="text-5xl font-extrabold text-center">
        Get Started in 3 Steps
      </h1>
      <p className="text-center mt-4">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  mx-auto gap-13 mt-10">
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
            <div className="flex justify-end p-4">
              <p className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                01
              </p>
            </div>
            <figure className="px-10 pt-10">
              <img
                src={userIcon}
                alt="Shoes"
                className=" bg-[#f4e8ff] rounded-full p-4"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
            <div className="flex justify-end p-4">
              <p className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                02
              </p>
            </div>
            <figure className="px-10 pt-10">
              <img
                src={products}
                alt="Shoes"
                className=" bg-[#f4e8ff] rounded-full p-4"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
            <div className="flex justify-end p-4">
              <p className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                03
              </p>
            </div>
            <figure className="px-10 pt-10">
              <img
                src={racket}
                alt="Shoes"
                className=" bg-[#f4e8ff] rounded-full p-3"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Start Creating</h2>
              <p className="text-[#627382]">
               Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCart;
