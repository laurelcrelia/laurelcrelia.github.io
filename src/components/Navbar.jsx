import React from "react"
import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)
  
    const handleNav = () => {
      setNav(!nav)
    }

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
      const yOffset = -100
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }
  
    return (
      <div className="fixed top-0 z-50 w-full">
        <div className="text-l mx-auto my-3 flex h-24 max-w-[1140px] items-center justify-between px-4 text-gray-300">
          <div className="my-auto">
          </div>
          <h1 className="secondary-color ml-4 w-full text-xl font-bold lg:text-2xl">
            <HashLink smooth to="/#home">
              Laurel Matt
            </HashLink>
          </h1>
          <ul className="hidden md:flex">
            <li className="p-5">
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
              <>
                <li className="p-5">
                <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)}>
                  About
                </HashLink>
              </li>
              </>
              <>
                <li className="p-5">
                  <HashLink smooth to="/#contact">
                    Contact
                  </HashLink>
                </li>
              </>
          </ul>
  
          <div
            role="button"
            onClick={handleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleNav()
              }
            }}
            tabIndex={0}
            className="block md:hidden"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
  
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#202121] text-gray-300 duration-500 ease-in-out"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="secondary-color m-4 text-3xl font-bold">
              Laurel Matt
            </h1>
            <ul className="p-8 text-2xl">
              <li className="p-5">
                <HashLink smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <>
                  <li className="p-5">
                    <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)}>
                      About
                    </HashLink>
                  </li>
                </>
                <>
                  <li className="p-5">
                    <HashLink smooth to="/#contact">
                      Contact
                    </HashLink>
                  </li>
                </>
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default Navbar;