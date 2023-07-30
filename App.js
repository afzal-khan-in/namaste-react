import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/images/logo.webp";
import resList from "./RestaurantList";
/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Name of restaurant, star rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
console.log(resList[0].info.cloudinaryImageId);
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
