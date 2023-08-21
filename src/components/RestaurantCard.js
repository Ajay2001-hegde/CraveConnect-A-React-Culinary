import { CDN_URL } from "../utils/constants";
  

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    lastMileTravelString,
    costForTwo
,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{locality}</h4>
        
        <span>
          <h4>{avgRating}</h4>
          
          <h4 className="cst">{costForTwo
}</h4>
          </span>
          <h5 className="cst">{lastMileTravelString}</h5>
      </div>
    );
  };


  export const promotedlabel =(RestaurantCard)=>{
      return ({props})=>{
        return (
          <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
          </div>
        )
      }
  }

  export default RestaurantCard;



  
  