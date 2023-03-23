import React from "react";
import picture1 from "../../assets/images/picture1.jpg"


const Card1 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture1} alt="" />
    </div>
    <div className="card-content-descirption row-span-1">
        <h1>blablbalbalbalba</h1>
    </div>
    </div>
  )
};

export default Card1;
