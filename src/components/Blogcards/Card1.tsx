import React from "react";
import picture1 from "../../assets/images/picture1.jpg"


const Card1 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 ">
    <div className="image-ctn row-span-2">
        <img src={picture1} alt="" />
    </div>
    <div className="card-content-descirption row-span-1 mx-5 flex flex-col justify-center gap-1">
        <h1 className="font-medium text-2xl">Update.</h1>
        <p>Öffnungszeiten unserer Coffee Houses</p>
    </div>
    </div>
  )
};

export default Card1;
