import RestrauruntCard from "./RestrauruntCard";
import resObj from "../utils/mockData";
import { useState } from "react";

function filterData(searchInput,restaurantList){
   return resObj.filter(res=> res.itemName.includes(searchInput));
}
const Body = () => {
    
    const [restaurantList,setRestaurantList]=useState(resObj);
    const [searchInput,setSearchInput]=useState("");

  return (
    <div className="body">
      <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={e=>setSearchInput(e.target.value)}/>
            <button className="search-btn" onClick={()=>{
                 const filter=filterData(searchInput,resObj);
                 setRestaurantList(filter);
                 console.log(restaurantList);
            } }>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((res) => (
          <RestrauruntCard {...res} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
