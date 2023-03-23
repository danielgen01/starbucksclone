import React from "react"
import mainpic1 from "../../assets/images/mainimage1.jpg"
import mainpic2 from "../../assets/images/mainimage2.png"
import Blog from "../Blog/Blog"

const Mainbanner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen gap-0">
      <div className="grid-item-1 bg-gray-400 lg:col-span-1 bg-[url('C:\Dev\Projects\starbucksclone\src\assets\images\mainimage1.jpg')]">
        <img src={mainpic1} alt="starbucks-rewards-banner" />
      </div>

      <div className="grid-item-2 lg:col-span-2  flex flex-col items-start lg:ml-10 mx-5">
        <img src={mainpic2} alt="" />
        <div className="description text-left flex flex-col ">
          <h1 className="text-black text-3xl mt-10 mb-5">
            Erlebe deine Kaffeeroutine jetzt anders!
          </h1>
          <p className="text-sm">🧊 Iced Brown Sugar Oat Shaken Espresso</p>
          <p className="text-sm">🧊 Iced Tasted Vanilla Oat Shaken Espresso</p>
          <p className="text-sm">🧊 Iced White Mocha Oat Shaken Espresso</p>
        </div>
        <Blog />
      </div>
    </div>
  )
}

export default Mainbanner
