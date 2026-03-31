import React, { use, useState } from "react";
import CartItem from "./CartItem";
import Cart from "./Cart/Cart";

const Main = ({ allData,setCount,count }) => {
    const data = allData
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="mb-8">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className="mb-30 border w-50 mx-auto py-1 flex justify-around items-center rounded-full border-gray-300 bg-[#e8e9ff] shadow-sm">
          <button onClick={() => setOpenCart(false)} className= {`btn rounded-full ${!openCart ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white' : 'text-black hover:bg-linear-to-r from-blue-500 to-purple-600' }`}>
            Products
          </button>
          <button
            onClick={() => setOpenCart(true)}
            className={`btn btn-ghost rounded-full hover:bg-linear-to-r from-blue-500 to-purple-600 text-black ${openCart ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white' : ''}`}
          >
            Cart({count})
          </button>
        </div>
      </div>
      <div>
        {openCart ? (
          <Cart cartItems={cartItems} setCartItems={setCartItems} setCount={setCount}/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {data.map((item) => (
              <CartItem key={item.id} cart={item} setCartItems={setCartItems} cartItems={cartItems} setCount={setCount} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
