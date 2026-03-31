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
      
    </div>
  );
};

export default Cart;
