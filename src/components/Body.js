import { Link } from "react-router";
import RestrauruntCard from "./RestrauruntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchInput, allRestuarants) {
  return allRestuarants?.filter((res) =>
    res?.brandName?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
}

// function ratingFilter(){
//   return restauList.filter(res=>res.info.avgRating>4.1);
// }
const Body = () => {
  const [allRestuarants, setAllRestaurants] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://apistaging.justmyroots.com/api/web/dashboard/meta?keyword=our-partners"
      );
      const json = await data.json();
      setAllRestaurants(json?.data[0]?.brands);
      setFilterRestaurantList(json?.data[0]?.brands);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false) return <h1>Look like you're offline!! Please check your internet connection;</h1>

  return allRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="px-4 py-2  bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filter = filterData(searchInput, allRestuarants);
            setFilterRestaurantList(filter);
          }}
        >
          Search
        </button>
        {/* <button className="filter-btn" onClick={()=>{
              const filterData=ratingFilter();
              setRestaurantList(filterData);
            }}>Top Restraurunt</button> */}
      </div>
      <div className="flex flex-wrap">
        {filterRestaurantList?.length === 0 ? (
          <h1>No Restaurants</h1>
        ) : (
          filterRestaurantList.map((res) => (
            <Link to={"/restaurant/" + res._id} key={res?._id}>
              <RestrauruntCard {...res} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
