import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";

const LoginForm = () => {
  const { login, logout, isLogged, message } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>

        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password*"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>

      {message && <Alert severity="error">{message}</Alert>}
      <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
        LOGIN
      </Button>
    </Box>
  );
};

export default LoginForm;
