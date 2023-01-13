import React, { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/gestione-animali"
          >
            GESTIONE ANIMALI
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
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
