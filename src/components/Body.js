import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import restaurantList from "../utils/mockdata";
import { swiggy_api_URL } from "../utils/constants";
import useOnlineStaus from "../utils/useOnlineStaus";
import Shimmer from "./Shimmer";
import RestaurantCard,{promotedlabel} from "./RestaurantCard";

export const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [filtered_res, setfiltered_res] = useState([]);
  const [searchtxt, setsearchtxt] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

    setlistofres(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfiltered_res(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

const promotedcard= promotedlabel(RestaurantCard);
const onlinestatus = useOnlineStaus();

if (onlinestatus===false){return(
  <Shimmer/>
 
)}

  return listofres.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="searchbar">
          <input
            type="text"
            className="searchbox"
            placeholder="search"
            onChange={(e) => {
              setsearchtxt(e.target.value);
            }}
          ></input>

          <button
            className="btn_search"
            onClick={() => {
              const filterlist = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
              );
              setfiltered_res(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter_button"
          onClick={() => {
            const filteredlist = listofres.filter((res) => res.info.avgRating > 4);
            setfiltered_res(filteredlist);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {filtered_res.map((restaurant) => (
          <div key={restaurant.info.id} className="custom-link">
            <Link to={'/restaurant/' + restaurant.info.id}>
            {
              restaurant.info.promoted ? <promotedcard  {...restaurant.info}></promotedcard> :<RestaurantCard {...restaurant.info} />

            }
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
