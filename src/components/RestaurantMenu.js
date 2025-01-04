import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurantName,setRestaurantName] = useState("");

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://apistaging.justmyroots.com/api/web/brand/feature/items/" +
          resId
      );
      const json = await data.json();
      setRestaurantInfo(json?.data?.items);
      setRestaurantName(json?.data?.items[0].brandName);
    } catch (error) {
      console.error("The error is occur:", error);
    }
  }
  return !restaurantInfo ? (
    <h1>RestaurantMenu is not available</h1>
  ) : (
    <div>
      <h1 className="restaurant-name">{restaurantName}</h1>

      <div className="menu-container">
        {restaurantInfo.map((restaurantMenu) => (
          <MenuCard {...restaurantMenu} key={restaurantMenu._id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
