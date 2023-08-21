import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Rescategory from './Rescategory';

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(-1); // Initially none are open


  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    CostForTwo,
    cloudinaryImageId,
  } = resInfo.cards[0].card.card.info;

  const {
    itemCards,
  } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card
    ?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.[`@type`] ===
        `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`
    ) || [];

 

  return (
    <div className="text-center">
      <h1 className="font-bold caret- m-10 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(',')} -{costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <Rescategory
          key={category.id}
          data={category?.card?.card}
          showitems={index === openCategoryIndex}
          setexpand={() => setOpenCategoryIndex(prevIndex => prevIndex === index ? -1 : index)}

        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
