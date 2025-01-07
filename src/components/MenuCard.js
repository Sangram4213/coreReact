import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = (props) => {
  const dispatch = useDispatch();

  const handleAddItem = ()=>{
     //Dispathch an Action
     dispatch(addItem(props));
  }
  console.log({a:props});
  return (
    <>
      <div className="m-4 p-4 w-[250px] bg-gray-100" onClick={handleAddItem}>
        <img src={props?.productImages?.[0]} alt="Food Image" />
        <h1>{props?.itemName}</h1>
        <h2>{props?.ratings}</h2>
      </div>
    </>
  );
};

export default MenuCard;
