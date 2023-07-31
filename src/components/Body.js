import { useState } from "react";
import listOfRestaurants from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants1, setlistOfRestaurants1] =
    useState(listOfRestaurants);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          type="button"
          onClick={() => {
            const filterRestaurants = listOfRestaurants1.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants1(filterRestaurants);
            console.log(filterRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants1.map((items) => (
          <RestaurantCard key={items.info.id} resData={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
