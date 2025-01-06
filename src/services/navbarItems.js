/*
<Link to="/" className="flex items-center space-x-2 hover:text-indigo-500">
            <FaHome /><span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-2 hover:text-indigo-500">
            <FaUserAlt /><span>About</span>
          </Link>
          <a href="/projects" className="flex items-center space-x-2 hover:text-indigo-500">
            <FaBriefcase /><span>Projects</span>
          </a>
          <a href="#contact" className="flex items-center space-x-2 hover:text-indigo-500">
            <FaEnvelope /><span>Contact</span>
          </a>
*/

import { FaBriefcase, FaEnvelope, FaHome, FaUserAlt } from "react-icons/fa";


export const navItems = [
    {
        id : 1,
        icon : FaHome,
        link : "Home",
        url : "/"
    },
    {
        id : 2,
        icon : FaUserAlt,
        link : "About",
        url : "/about"
    },
    {
        id : 3,
        icon : FaBriefcase,
        link : "Projects",
        url : "/projects"
    },
    {
        id : 4,
        icon : FaEnvelope,
        link : "Contact",
        url : "/contact"
    }
]