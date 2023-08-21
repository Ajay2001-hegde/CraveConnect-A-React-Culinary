import React from "react";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";
import { Link } from "react-router-dom";
import Grocerycard from "./Grocerycard";
const Grocery = ()=>{
    const [listofres, setlistofres] = useState([]);
  const [filtered_res, setfiltered_res] = useState([]);
  const [searchtxt, setsearchtxt] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const json = await data.json();
    setlistofres(json.products);
    setfiltered_res(json.products);
    
  };

  const onlinestatus = useOnlineStatus();
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
        {filtered_res.map((groceries) => (
          <div key={groceries.id} className="custom-link">
            <Link to={'/grocery/' + groceries.id}>
              <Grocerycard {...groceries} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Grocery