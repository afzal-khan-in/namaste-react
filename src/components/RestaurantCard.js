import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="res-text">{name}</h3>
      <p className="res-text">{cuisines.join(", ")}</p>
      <h4 className="res-text">{avgRating} Stars</h4>
      <p className="res-text">{costForTwo}</p>
      <p className="res-text">{deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
