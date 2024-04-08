import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// not using keys (not acceptable) <<<< index as key <<<< unique id
const Body = () => {
  // State Variable - Super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async ()=> {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // Optional Chaining
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
  }
  if(ListOfRestaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
