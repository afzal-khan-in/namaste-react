import resList from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((items) => (
          <RestaurantCard key={items.info.id} resData={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
