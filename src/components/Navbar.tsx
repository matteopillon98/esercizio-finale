import React, { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLogged, logout } = useContext(UserContext);
  if (isLogged) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/aggiungi-animale"
            >
              Aggiungi Animale
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/modifica-animale"
            >
              Modifica Animale
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/inventario"
            >
              Inventario
            </NavLink>
          </li>
        </ul>
        <Button className="bnt-logout" onClick={logout}>
          Logout
        </Button>
      </nav>
    );
  }
  return null;
};

export default Navbar;
