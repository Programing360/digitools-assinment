import React from "react";

const WorkFlowBanner = () => {
  return (
    <div className="container mx-auto text-center bg-linear-to-r from-blue-500 to-purple-600 py-20 px-4 rounded-lg mt-20 mb-30">
      <h1 className="text-5xl font-bold text-white">
        Ready to Transform Your Workflow?
      </h1>
      <p className="text-[16px] leading-6 my-4 text-gray-400">
        Join thousands of professionals who are already using Digitools to work
        smarter.
        <br />
        Start your free trial today.
      </p>
      <div className="flex justify-center items-center gap-4 mb-4">
        <button className="px-4 py-2 bg-white font-bold cursor-pointer active:scale-95 rounded-full text-purple-500">
          Exprole Products
        </button>
        <button className="px-4 py-2 rounded-full text-white font-bold border border-white hover:bg-white hover:text-purple-500 cursor-pointer active:scale-95">
          View Pricing
        </button>
      </div>
      <p className="text-[16px] leading-6 text-gray-400">
        14-day free trial • No credit card required • Cancel anytime14-day free
        trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlowBanner;
