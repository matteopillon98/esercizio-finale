import { ComponentProps, useContext } from "react";
import { useUser } from "../utils/UserProvider";
import { NavLink } from "react-router-dom";
import Logout from "../utils/Logout";

export default function Navbar() {
  const { isLogged } = useUser();

  return (
    <nav>
      <ul>
        <li>
          <NavLinkItem to="/">HOME</NavLinkItem>
        </li>
        <li>
          <NavLinkItem to="/gestione-animali">GESTIONE ANIMALI</NavLinkItem>
        </li>
        <li>
          <NavLinkItem to="/inventario">INVENTARIO</NavLinkItem>
        </li>
      </ul>
      {isLogged && <Logout />}
    </nav>
  );
}

const NavLinkItem = ({ ...props }: ComponentProps<typeof NavLink>) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? "active-link " : "")}
    />
  );
};
