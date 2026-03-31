import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems, setCartItems,setCount }) => {

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    toast.success("Item removed from cart!");
    setCartItems(updatedCart);
  };
  const handleRemoveAll = () => {
    toast.success("Checkout successful!");
    setCartItems([]);
    setCount(0);
  }
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cart) => (
            <div
              key={cart.id}
              className="border border-gray-400 p-4 rounded-lg mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-[20px] font-bold">{cart.name}</h2>
                <p>{cart.description}</p>
                <p>${cart.price.toFixed(2)}</p>
              </div>
              <div>
                <button
                  onClick={() => handleRemove(cart.id)}
                  className="text-red-500 cursor-pointer active:scale-95"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Total:</h2>
            <p>
              $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </p>
          </div>
          <button onClick={handleRemoveAll} className="bg-linear-to-r from-blue-500 to-purple-600 text-white w-full py-2 rounded-full mt-5 mb-30 cursor-pointer active:scale-95">
            Process to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
