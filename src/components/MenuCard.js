import React from "react";

const MenuCard = ({ itemName, ratings, productImages }) => {
  return (
    <>
      <div className="m-4 p-4 w-[250px] bg-gray-100">
        <img src={productImages[0]} alt="Food Image" />
        <h1>{itemName}</h1>
        <h2>{ratings}</h2>
      </div>
    </>
  );
};

export default MenuCard;
