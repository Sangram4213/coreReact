
import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {

      const [restaurantInfo, setRestaurantInfo] = useState([]);

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
      } catch (error) {
        console.error("The error is occur:", error);
      }
    }
    return restaurantInfo;
}

export default useRestaurantMenu