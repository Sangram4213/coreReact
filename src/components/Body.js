import { Link } from "react-router";
import RestrauruntCard from "./RestrauruntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

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

  return allRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
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
