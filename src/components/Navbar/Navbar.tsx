import React from "react"
import { SiStarbucks } from "react-icons/si"
import { AiOutlineMenu } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

const Navbar: React.FC = () => {
  return (
    <div className="nav-ctn h-24 flex justify-between shadow-md items-center">
      <nav className="flex gap-5 font-semibold uppercase mx-10 items-center ">
        <SiStarbucks className="text-4xl lg:text-5xl text-[#00704A]" />
        <div className="desktop-nav-links gap-5 text-sm  font-semibold hidden lg:flex">
          <a href="#" className="hover:text-[#00704A]">
            Menu
          </a>
          <a href="#" className="hover:text-[#00704A]">
            Nährwerte
          </a>
          <a href="#" className="hover:text-[#00704A]">
            Rewards
          </a>
          <a href="#" className="hover:text-[#00704A]">
            More
          </a>
        </div>
      </nav>
      <div className="navbar-top-right-content hidden lg:flex items-center gap-5 mr-10">
      <div className="gap-2 ml-auto flex items-center cursor-pointer hover:opacity-50 duration-200">
        <MdLocationOn className="text-2xl" />
        <p className="font-bold">Coffe House Suche</p>
      </div>
      <div className="login-btn hover:opacity-70">
        <button className="rounded-2xl border-2 border-[#00704A] px-2 py-1 font-semibold text-sm">
          Anmelden
        </button>
      </div>
      <div className="jetzt-mitmachen-btn hover:opacity-70">
        <button className="rounded-2xl bg-black px-2 py-1 text-white font-semibold text-sm">
          Jetzt mitmachen
        </button>
      </div>
      </div>
      <AiOutlineMenu className="ml-auto mr-5 lg:hidden text-2xl" />
    </div>
  )
}

export default Navbar
