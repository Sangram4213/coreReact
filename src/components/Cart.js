import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsArray = Object.values(cartItems);

  const dispatch = useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4 flex">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
      {cartItemsArray.length===0 && <h1>Cart is empty. Add items to cart!</h1>}
      <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
        {cartItemsArray.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
