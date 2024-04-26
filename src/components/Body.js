import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {SWIGGY_URL} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
const Body =()=>{
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(()=>{
    console.log("Use Effect Callback function Called!");
    fetchData();
  }, [])

  const fetchData = async ()=>{
    // fetch is given us by Browser's JS engine - It will return a Promise
    const data = await fetch(SWIGGY_URL);
    // await for data to come from API
    
    
    // await for Promise to get resolved & convert the data to JSON
    const json = await data.json();
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // ! Optional Chaining is important
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>Looks like you are offline!! Plese check your internet connection</h1>
    );
  }

  return listOfRes.length === 0 ? (<Shimmer/>) : ( // * Conditional Rendering -> Load A Shimmer UI - Good Practise ✅
    <div className="body">
      <div className="res-near">
      <div className="search-container m-2 p-4">
        <input type="text" className="border border-solid border-black" value={searchText} onChange={
          (e)=>{
            setSearchText(e.target.value);
          }
        }/>
        <button className="px-4 py-2 bg-green-500 m-4 rounded-3xl" children onClick={
          ()=>{
            const searchedRes = listOfRes.filter((res) => {
                return res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) || 
                (res.info.cuisines && res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText?.toLowerCase()))
            }) 
            if(searchedRes.length > 0 && searchText){
              setFilteredRes(searchedRes);
            } else {
              fetchData();
            }
          }
        }>Search</button>
      </div>
      <div className="filter m-4">
        <button
          className="filter-btn  p-4 bg-green-500 rounded-2xl"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
              console.log(filteredRes);
              setFilteredRes(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurants) => (
          // For each restaurants => return a (JSX) i.e <RestaurantCard /> (and pass data to it)
          <Link key={restaurants.info.id} to={`restaurant/${restaurants.info.id}`} style={{textDecoration: 'none', color: "#000"}}>
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
 }

 export default Body;