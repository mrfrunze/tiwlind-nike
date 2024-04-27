import {navLinks} from "../constants/index"
import {hamburger} from "../assets/icons"
import {headerLogo} from "../assets/images"
import { useState } from "react"

const Nav = () => {
  const [isActive, setIsActive] = useState(false)
  const btnMenu = document.querySelector(".mobile-burger");
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <header className="w-full padding-x py-8 z-10 fixed bg-white top-0 start-0 border-b border-gray-200">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" className="m-0 w-[130px] h-[29px]" />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 lg:flex ${isActive ? "flex" : "hidden" } max-lg:flex-col max-lg:p-3 max-lg:absolute max-lg:w-full max-lg:z-10 max-lg:top-[93px] max-lg:start-0 max-lg:bg-white`}>
          {navLinks.map(item => (
            <li key={item.label} >
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block mobile-burger max-lg:relative max-lg:z-20" onClick={handleClick}>
          <img src={hamburger} alt="hamburger" className="w-[25px] h-[25px]" />
        </div>
      </nav>
    </header>
  )
}

export default Nav