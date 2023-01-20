import { useContext, useReducer, useState, ChangeEvent } from "react";
import { useUser } from "../utils/UserProvider";
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

export default function LoginForm() {
  const { login, message } = useUser();

  const [user, handleUserChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const [showPassword, handleShowPasswrod] = useReducer((s) => !s, false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user, password);
  };

  return (
    <Box component="form" className="login-form" onSubmit={handleFormSubmit}>
      <Alert severity="info">Username: admin - Password: admin</Alert>

      <TextField
        id="username"
        label="Username"
        type="text"
        placeholder="Inserisci il tuo username"
        onChange={handleUserChange}
        required
      />

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-password">
          <span lang="en">Password*</span>
        </InputLabel>
        <OutlinedInput id="outlined-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPasswrod}
                type="button"
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password*"
          onChange={handlePasswordChange}
          required
        />
      </FormControl>

      {message && <Alert severity="error">{message}</Alert>}
      <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
        LOGIN
      </Button>
    </Box>
  );
}

function useInput( defaultValue: string): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [value, onChange];
}
