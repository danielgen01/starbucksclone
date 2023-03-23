import React from "react";
import picture3 from "../../assets/images/picture3.jpg"


const Card4 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3">
    <div className="image-ctn row-span-2">
        <img src={picture3} alt="" />
    </div>
    <div className="card-content-descirption row-span-1 mx-5 flex gap-1 flex-col justify-center">
        <h1 className="font-medium text-2xl">Starbucks Stories</h1>
        <p>Bleibe auf dem Laufenden mit unseren neusten Stories</p>
        <button className="border-[#00704A] border-2 w-1/4 rounded-xl text-[#00704A] px-2 py-1 font-semibold text-sm cursor-pointer hover:bg-[#00704A]/20">Erfahre mehr</button>
      </div>
    </div>
  )
};

export default Card4;
