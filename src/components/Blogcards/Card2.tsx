import React from "react"
import picture2 from "../../assets/images/picture2.jpg"

const Card2 = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 lg:grid-rows-3">
      <div className="image-ctn row-span-2">
        <img src={picture2} alt="" />
      </div>
      <div className="card-content-descirption row-span-1 mx-5 flex gap-1 flex-col justify-center">
        <h1 className="font-medium text-2xl">Starbucks Delivers mit Lieferando und Uber Eats</h1>
        <p>Lass dir deine Starbucks Lieblinge direkt vor deine Haustür liefern oder einfach vorbestellen und direkt im Coffee House abholen</p>
        <button className="border-[#00704A] border-2 w-1/4 rounded-xl text-[#00704A] px-2 py-1 font-semibold text-sm cursor-pointer hover:bg-[#00704A]/20">Jetzt bestellen</button>
      </div>
    </div>
  )
}

export default Card2
