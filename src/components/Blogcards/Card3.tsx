import React from "react";
import picture4 from "../../assets/images/picture4.jpg"


const Card3 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture4} alt="" />
    </div>
    <div className="card-content-descirption row-span-1 mx-5 flex gap-1 flex-col justify-center">
        <h1 className="font-medium text-2xl">Über uns</h1>
        <p>Über unsere Geschichte und das Unternehmen</p>
        <button className="border-[#00704A] border-2 w-1/4 rounded-xl text-[#00704A] px-2 py-1 font-semibold text-sm cursor-pointer hover:bg-[#00704A]/20">Erfahre mehr</button>
      </div>
    </div>
  )
};

export default Card3;
