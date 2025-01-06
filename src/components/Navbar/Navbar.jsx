import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { navItems } from "../../services/navbarItems";

const Navbar = ({activeLink,setActiveLink}) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
          to="/"
          onClick={() => setActiveLink(1)}
          >
            Sevi Dervishi's <span className="text-indigo-500">Portfolio</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex md:items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={ activeLink == item.id ? "flex items-center space-x-2 text-indigo-500" : "flex items-center space-x-2 hover:text-indigo-500" }
              onClick={() => setActiveLink(item.id)}
            >
              <item.icon />
              {item.link}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              onClick={() => setNavOpen(false)} // Close menu on click
              className="block px-6 py-3 text-lg hover:text-indigo-500"
              activeClassName="block px-6 py-3 text-lg text-indigo-500 hover:text-indigo-500"
              
            >
              <div className="flex items-center space-x-2">
                <item.icon />
                <span>{item.link}</span>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
