import { NavLink } from "react-router-dom";

export default function PageNotFound  ()  {
  return (
    <div className="error-404">
      <h3>ERROR 404</h3>
      <p>La pagina che stai cercando non esiste</p>
      <NavLink className="return-home" to="/">
        HOME
      </NavLink>
    </div>
  );
};

