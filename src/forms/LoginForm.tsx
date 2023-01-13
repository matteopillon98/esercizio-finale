import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";

const LoginForm = () => {
  const { login, logout, isLogged, message } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user, password);
  };

  return (
    <Box
      component="form"
      className="login-form"
      onSubmit={handleFormSubmit}
      method="post"
    >
      <Alert severity="info">Username: admin - Password: admin</Alert>

      <TextField
        id="username"
        name="username"
        label="Username"
        type="text"
        placeholder="Inserisci il tuo username"
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="Inserisci la password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {message && <Alert severity="error">{message}</Alert>}
      <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
        LOGIN
      </Button>
    </Box>
  );
};

export default LoginForm;
