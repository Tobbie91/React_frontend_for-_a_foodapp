import React, { useEffect } from "react";
import restuarant from "../../assets/restaurant.svg";
import search from "../../assets/search.png";
import "./RestuarantContainer.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

const RestuarantContainer = () => {
  const { GetAllVendorsFood, getVendorFood, handleAddFood } = useAuth();
  let { vendorId } = useParams();

  useEffect(()=>{
    GetAllVendorsFood(vendorId)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <div>
      <div className="rest-header">
        <h3>
          Restaurants
          <span>
            <img src={restuarant} alt="" />
          </span>
        </h3>
        <form className="rest-form">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </form>
      </div>

      {getVendorFood.map((elem) => (
        <section key={elem.id} className="restaurant-card">
          <img src={elem.image} alt="" />
          <div>
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
            <h4>{elem.price}</h4>
            <button className="btn-style" onClick={() => handleAddFood(elem)}>
              Add to Cart
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default RestuarantContainer;
