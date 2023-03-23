import React from "react";
import picture2 from "../../assets/images/picture2.jpg"


const Card2 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture2} alt="" />
    </div>
    <div className="card-content-descirption row-span-1">
        <h1>blablbalbalbalba</h1>
    </div>
    </div>
  )
};

export default Card2;
