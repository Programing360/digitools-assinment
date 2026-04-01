import React from "react";
import bannerImage from "../../assets/banner.png";
import playIcon from "../../assets/play.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-15 my-30 mx-4">
        <div className="leading-8">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#e8e9ff] shadow-sm mb-6">
              <span className="w-3 h-3 bg-purple-500 shadow-[0_0_10px_4px_rgba(168,85,247,0.6)] rounded-full"></span>
              <span
                className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text px-2.5 py-0.3 rounded-full
            "
              >
                : AI-Powered Tools Available
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center md:text-start">
            Supercharge Your
            <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Digital Workflow</span>
          </h1>
          <p className="mb-8 text-center md:text-start ">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          <div className="flex justify-center md:justify-start items-center ">
            <button className="btn rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
              Explore Products
            </button>
            <button className=" border border-indigo-400 btn ml-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              <img className="w-5 " src={playIcon} alt="Play Icon" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
      </div>

      <div className="flex justify-around items-center bg-linear-to-r from-blue-500 to-purple-600 text-white gap-10 py-10 rounded-lg mb-30 mx-4">
        <div>
          <h1 className="text-4xl font-extrabold">50K+</h1>
          <p className="text-md font-medium">Active Users</p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">200+</h1>
          <p className="text-md font-medium">Premium Tools</p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">4.9</h1>
          <p className="text-md font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
