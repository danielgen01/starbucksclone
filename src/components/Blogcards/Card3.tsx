import React from "react";
import picture3 from "../../assets/images/picture3.jpg"


const Card3 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture3} alt="" />
    </div>
    <div className="card-content-descirption row-span-1">
        <h1>blablbalbalbalba</h1>
    </div>
    </div>
  )
};

export default Card3;