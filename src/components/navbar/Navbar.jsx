import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { MenuLinks } from "../../utils/data";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-10 w-full">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <Link className="flex items-center gap-3">
            <img src={logo} alt="" className="w-7 " />
            <span className="text-2xl sm:text-3xl font-semibold">
              Digital agency
            </span>
          </Link>
          {/* Desktop View */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <button className="primary-btn">Get in Touch</button>
            </ul>
          </nav>
          {/* Mobile Drawer  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={() => setShowMenu(!showMenu)}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={() => setShowMenu(!showMenu)}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
