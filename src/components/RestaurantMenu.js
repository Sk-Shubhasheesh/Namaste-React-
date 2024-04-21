import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => { 
 const {resId} = useParams();
 const resInfo = useResturantMenu(resId)

 if(resInfo === null) return <Shimmer/>;

 const { name , cuisines , locality, avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
 const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <p>{locality}</p>
      <p>{avgRatingString}</p>
      <p>{totalRatingsString}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
   {/*  <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>  */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;