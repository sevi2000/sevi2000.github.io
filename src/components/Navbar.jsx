import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" }
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-grey-900/80 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide">Sevi Dervishi</h1>
      <ul className="flex gap-6">
        {links.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-teal-400 transition ${location.pathname === link.path ? "text-teal-400" : ""}`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
