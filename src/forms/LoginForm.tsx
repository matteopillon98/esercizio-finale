import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { UserContext } from "../utils/UserProvider";

function LoginForm() {
  const { login, logout, isLogged, message } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user, password);
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <fieldset>
        <label htmlFor="user">User: </label>
        <input
          type="text"
          name="user"
          id="name"
          placeholder="Inserisci username"
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Inserisci la password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </fieldset>
      {message && <div style={{ color: "red" }}>{message}</div>}

      <input type="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
