import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount,setItemCount]=useState(0)
  return (
    <div className="food-item">
      <div className="item-img-container">
      <img  className='food-item-image'src={image} />
            {!itemCount?
            <img className="add" src={assets.add_icon_white} onClick={()=>setItemCount(prevCount=>prevCount+1)}/>:
            <div className="food-item-counter">
              <img src={assets.add_icon_green} onClick={()=>setItemCount(prevCount=>prevCount+1)}/>
              <p>{itemCount}</p>
              <img src={assets.remove_icon_red} onClick={()=>setItemCount(prevCount=>prevCount-1)} />
            </div>
          }
      

      </div>
     
      <div className="food-item-info">
        <div className="food-item-name-rate">
          <p>{name}</p>

          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-dec">{description}</p>
        <p className="food-item-price">{price}$</p>
      </div>
    </div>
  );
};

export default FoodItem;
