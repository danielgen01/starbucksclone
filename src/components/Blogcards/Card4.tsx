import React from "react";
import picture4 from "../../assets/images/picture4.jpg"


const Card4 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture4} alt="" />
    </div>
    <div className="card-content-descirption row-span-1 m-5">
        <h1>blablbalbalbalba</h1>
    </div>
    </div>
  )
};

export default Card4;
