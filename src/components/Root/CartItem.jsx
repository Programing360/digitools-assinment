import React from "react";
import { toast } from "react-toastify";

const CartItem = ({ cart ,setCartItems,cartItems,setCount}) => {

  const handleAddToCart = () => {
    setCartItems([...cartItems, cart])
    setCount((prev) => prev + 1);
    toast.success("Item added to cart!");
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <span className={`badge uppercase rounded-full  ${cart.tagType === 'best seller' && 'bg-[#fef3c6] text-amber-600' } 
            ${cart.tagType === 'new' && 'bg-[#9ceeba] text-green-700' } ${cart.tagType === 'popular' && 'bg-[#e1e7ff] text-purple-500'}`}>
            {cart.tagType}
          </span>
          <div className="">
            <h2 className="text-3xl font-bold mb-3">{cart.name}</h2>
            <p>{cart.description}</p>
            <p className="text-xl mt-3">${cart.price.toFixed(2)}/{cart.period}</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {
                cart.features.map((feature, index) => <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>)
                    
            }
            
            
          </ul>
          <div className="mt-6">
            <button onClick={()=> handleAddToCart()} className="btn btn-primary rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white btn-block">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
