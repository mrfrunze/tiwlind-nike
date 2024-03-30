import {navLinks} from "../constants/index"
import {hamburger} from "../assets/icons"
import {headerLogo} from "../assets/images"

const Nav = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" className="m-0 w-[130px] h-[29px]" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label} >
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" className="w-[25px] h-[25px]" />
        </div>
      </nav>
    </header>
  )
}

export default Nav