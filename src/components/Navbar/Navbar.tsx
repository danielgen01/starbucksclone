import React from "react"
import { SiStarbucks } from "react-icons/si"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar: React.FC = () => {
  return (
    <div className="nav-ctn h-24 flex shadow-md items-center">
      <nav className="flex gap-5 font-semibold uppercase mx-10 items-center justify-between ">
        <SiStarbucks className="text-4xl lg:text-5xl text-[#00704A]" />
        <div className="desktop-nav-links gap-5 text-sm  font-semibold hidden lg:flex">
          <a href="#" className="hover:text-[#00704A]">Menu</a>
          <a href="#" className="hover:text-[#00704A]">Nährwerte</a>
          <a href="#" className="hover:text-[#00704A]">Rewards</a>
          <a href="#" className="hover:text-[#00704A]">More</a>
        </div>
      </nav>
      <AiOutlineMenu className="ml-auto mr-5 lg:hidden text-2xl" />
    </div>
  )
}

export default Navbar
