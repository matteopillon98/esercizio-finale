import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserProvider";

const LoginForm = () => {
  const { login, logout, isLogged, message } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  if (isLogged) {
    return (
      <div className="user-logged">
        <h2>Hai già effettuato l'accesso</h2>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user, password);
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit} method="post">
      <fieldset>
        <legend>
          Username: <strong>admin</strong> Password: <strong>admin</strong>
        </legend>
        <label htmlFor="username">
          Username<span>*</span>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Inserisci username"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Inserisci la password"
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-required="true"
        />
      </fieldset>
      {message && <div style={{ color: "red" }}>{message}</div>}
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
