import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, locality, avgRatingString, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  // console.log("Data", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )


  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <h3 className="text-orange-500">{cuisines.join(", ")}</h3>
      <h3>
          <span className="text-md">⭐</span>
          {avgRatingString} ({totalRatingsString}) 
        </h3>
        <h3>Outlet - {locality}</h3>
        {categories.map((category, index)=>(
          <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex = {()=> setShowIndex(index)}
          />


        ))}
    </div>
  );
};

export default RestaurantMenu;
