import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  const restaurantName = restaurantInfo?.[0]?.brandName;

  return !restaurantInfo ? (
    <h1>RestaurantMenu is not available</h1>
  ) : (
    <div>
      <h1 className="restaurant-name">{restaurantName}</h1>

      <div className="flex flex-wrap">
        {restaurantInfo.map((restaurantMenu) => (
          <MenuCard {...restaurantMenu} key={restaurantMenu._id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
