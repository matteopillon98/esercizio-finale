import React, { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(UserContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
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
      <Button className="bnt-logout" onClick={logout}>
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
