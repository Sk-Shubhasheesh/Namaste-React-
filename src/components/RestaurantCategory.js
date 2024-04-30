import IteamList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
  const handleClick = ()=>{
    setShowIndex()

  }

    return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
         {/* Accordion Body */}
      {showItems &&<IteamList items={data.itemCards}/>}

      </div>

    </div>
    );
}


export default RestaurantCategory;