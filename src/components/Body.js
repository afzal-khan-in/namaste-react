import { useState, useEffect } from "react";
//import listOfRestaurants from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchFilteredRestaurant, setSearchFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3667195&lng=78.4285084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <div className="body-container">
      <Shimmer />
    </div>
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Enter text"
        />
        <button
          onClick={() => {
            const searchFilteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchFilteredRestaurant(searchFilteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setlistOfRestaurants(filterRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchFilteredRestaurant.map((items) => (
          <RestaurantCard key={items.info.id} resData={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
