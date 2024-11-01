import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex flex-row gap-4 bg-pink-400">
      <NavLink to="/">landing</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) => `${isActive ? "activa" : ""}`}
      >
        Home
      </NavLink>
    </nav>
  );
};
