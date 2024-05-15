import React from 'react';
import ReactDOM from 'react-dom/client';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import resList from './JSON/data';

/**
 * Header
 *  -Logo Component
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *      -Img
 *      -Name of Res,Star Rating, Cuisine,delivery time 
 * -RestaurantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
*/
const Header = () =>{
  return(
    
    <div className='header'>
    {
console.log(resList , 'resList-------')

    }
      <div className='logo-container'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&usqp=CAU' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () =>{
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className="res-container">
        {console.log(resList , 'resList')}
        {resList && resList.length >0 && resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

      </div>
    </div>
  )
  
}
const AppLayout = () =>{
  return(
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)