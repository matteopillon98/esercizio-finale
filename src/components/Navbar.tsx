import React, { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import { NavLink } from "react-router-dom";
import Logout from "../utils/Logout";

const Navbar = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link " : "")}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link " : "")}
            to="/gestione-animali"
          >
            GESTIONE ANIMALI
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link " : "")}
            to="/inventario"
          >
            INVENTARIO
          </NavLink>
        </li>
      </ul>
      {isLogged && <Logout />}
    </nav>
  );
};

export default Navbar;
