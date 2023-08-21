import React, { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resid]);  // Include 'resid' in the dependency array

  const fetchData = async function () {
    try {
      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.977045&lng=74.56647&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`;
      const response = await fetch(apiUrl);
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
